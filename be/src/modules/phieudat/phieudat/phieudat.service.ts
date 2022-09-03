import { ConsoleLogger, flatten, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CtPhieudatService } from 'src/modules/ct_phieudat/ct_phieudat.service'
import { CreateCtPhieudatDto } from 'src/modules/ct_phieudat/dto/create-ct_phieudat.dto'
import { DataSource, Repository } from 'typeorm'
import { CreatePhieudatDto } from '../dto/create-phieudat.dto'
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto'
import { Phieudat } from '../entities/phieudat.entity'
import { v4 as uuidv4 } from 'uuid'
import { DEFAULT_MANV } from 'src/constants/constant'
import { CtPhieudat } from 'src/modules/ct_phieudat/entities/ct_phieudat.entity'
import { GetTotalDto } from '../dto/get-total.dto'
import { UpdateCtPhieudatDto } from 'src/modules/ct_phieudat/dto/update-ct_phieudat.dto'
import { StaffService } from 'src/modules/staffs/staff.service'
import { getManager } from 'typeorm'
import { WinelineService } from 'src/modules/wineline/wineline.service'

@Injectable()
export class PhieudatService {
	constructor(
		@InjectRepository(Phieudat) private phieudatRepo: Repository<Phieudat>, //inject repo
		private ctPhieuDatService: CtPhieudatService,
		private staffService : StaffService,
		private winelineService: WinelineService,
		private dataSource: DataSource
	) {}

	findAll() {
		//function handle get list pd
		return this.phieudatRepo.find({
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
		})
	}

	findById(MAPD: string) {
		return this.phieudatRepo.findOne({
			where: { MAPD: MAPD },
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
		})
	}
	findByState(TRANGTHAI: string) {
		// return this.phieudatRepo.query(`
		// SELECT * FROM phieudat p
		// WHERE p.TRANGTHAI = '${TRANGTHAI}'
		// `)
		if(TRANGTHAI === 'ALL'){
			return this.phieudatRepo.find({
				relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
				order: { NGAYDAT: 'DESC'},
			})
		}
		return this.phieudatRepo.find({
			where: { TRANGTHAI: TRANGTHAI },
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
			order: { NGAYDAT: 'DESC'},
		})
	}

	async findByStateAndNVGH(TRANGTHAI: string, MANV: string) {
		if(TRANGTHAI === 'ALL'){
			return this.phieudatRepo.find({
				where: { MANVGH: MANV },
				relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
				order: { NGAYDAT: 'DESC'},
			})
		}
		return this.phieudatRepo.find({
			where: { TRANGTHAI: TRANGTHAI, MANVGH:MANV },
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
			order: { NGAYDAT: 'DESC'},
		})
	}

	
	async create(payload: CreatePhieudatDto) {
		// console.log(this.dataSource)
		// check slt
		const { CTPDS } = payload
		for (const ct_phieudat of CTPDS) {
			const createCtPhieudatDto: CreateCtPhieudatDto = {
				MAPD: payload.MAPD,
				MADONG: ct_phieudat.MADONG,
				SOLUONG: ct_phieudat.SOLUONG,
				GIA: ct_phieudat.GIA,
			}
			//check ne
			const bool = await this.winelineService.checkSlt(createCtPhieudatDto.MADONG, createCtPhieudatDto.SOLUONG)
			console.log('bool',bool)
			if(bool === false){
				console.log('in here')
				throw new InternalServerErrorException('Sản phẩm không đủ số lượng trong kho!')
			}
		}

		const queryRunner = this.dataSource.createQueryRunner();

		await queryRunner.connect();
		await queryRunner.startTransaction();
		try {
			//func handle create new pd
			

			// const { CTPDS } = payload
			const phieudat = this.phieudatRepo.create(payload) //create nhung chua duoc save

			await this.phieudatRepo.save(phieudat) //khi save thi data moi duoc luu vao db

			const promises = []

			for (const ct_phieudat of CTPDS) {
				const createCtPhieudatDto: CreateCtPhieudatDto = {
					MAPD: payload.MAPD,
					MADONG: ct_phieudat.MADONG,
					SOLUONG: ct_phieudat.SOLUONG,
					GIA: ct_phieudat.GIA,
				}

				//update slt
				await this.winelineService.updateSLT(createCtPhieudatDto.MADONG, createCtPhieudatDto.SOLUONG)

				promises.push(
					await this.ctPhieuDatService.create(createCtPhieudatDto)
					)
			}


			const cTPDs = await Promise.all(promises)
		

			phieudat.ct_phieudats = cTPDs
			
			await queryRunner.commitTransaction();
			return phieudat
		} catch(err) {
			console.log('loi ne');
			
			await queryRunner.rollbackTransaction();
			throw err;
		} finally {
			await queryRunner.release();
		}
	}

	async createPaypalPd(payload: CreatePhieudatDto) {
		//func handle create new pd

		const { CTPDS } = payload
		for (const ct_phieudat of CTPDS) {
			const createCtPhieudatDto: CreateCtPhieudatDto = {
				MAPD: payload.MAPD,
				MADONG: ct_phieudat.MADONG,
				SOLUONG: ct_phieudat.SOLUONG,
				GIA: ct_phieudat.GIA,
			}
			//check ne
			const bool = await this.winelineService.checkSlt(createCtPhieudatDto.MADONG, createCtPhieudatDto.SOLUONG)
			console.log('bool',bool)
			if(bool === false){
				console.log('in here')
				throw new InternalServerErrorException('Sản phẩm không đủ số lượng trong kho!')
			}
		}

		const queryRunner = this.dataSource.createQueryRunner();

		await queryRunner.connect();
		await queryRunner.startTransaction();
		try {
			//func handle create new pd
			

			// const { CTPDS } = payload
			const phieudat = this.phieudatRepo.create(payload) //create nhung chua duoc save

			await this.phieudatRepo.save(phieudat) //khi save thi data moi duoc luu vao db

			const promises = []

			for (const ct_phieudat of CTPDS) {
				const createCtPhieudatDto: CreateCtPhieudatDto = {
					MAPD: payload.MAPD,
					MADONG: ct_phieudat.MADONG,
					SOLUONG: ct_phieudat.SOLUONG,
					GIA: ct_phieudat.GIA,
				}

				//update slt
				await this.winelineService.updateSLT(createCtPhieudatDto.MADONG, createCtPhieudatDto.SOLUONG)

				promises.push(
					await this.ctPhieuDatService.create(createCtPhieudatDto)
					)
			}


			const cTPDs = await Promise.all(promises)
		

			phieudat.ct_phieudats = cTPDs
			
			await queryRunner.commitTransaction();
			return phieudat
		} catch(err) {
			console.log('loi ne');
			
			await queryRunner.rollbackTransaction();
			throw err;
		} finally {
			await queryRunner.release();
		}
	}

	async update(MAPD: string, payload: UpdatePhieudatDto) {
		const phieudat = await this.findById(MAPD)

		if (!phieudat) throw new NotFoundException('PD is not exist')

		const staff = await this.staffService.findById(payload.MANVD)
		console.log(payload.MANVD)

		
		// await this.phieudatRepo.update(MAPD, phieudat)

		//phieudat.ct_phieudats = cTPDs
		phieudat.MAPD = payload.MAPD
        phieudat.NGAYDAT = payload.NGAYDAT
		phieudat.HONN = payload.HONN
		phieudat.TENNN = payload.TENNN
		phieudat.DIACHINN = payload.DIACHINN
		phieudat.SDTNN = payload.SDTNN
		phieudat.GHICHU = payload.GHICHU
		phieudat.TRANGTHAI = payload.TRANGTHAI
		phieudat.staff = staff
		phieudat.MANVGH = payload.MANVGH
		phieudat.MAKH = payload.MAKH

		

		return this.phieudatRepo.createQueryBuilder('phieudat')
		.update(Phieudat)
		.set({
			NGAYDAT: phieudat.NGAYDAT,
            HONN: phieudat.HONN,
            TENNN: phieudat.TENNN,
            DIACHINN: phieudat.DIACHINN,
            SDTNN: phieudat.SDTNN,
            GHICHU: phieudat.GHICHU,
            TRANGTHAI: phieudat.TRANGTHAI,
            staff: phieudat.staff,
            MANVGH: phieudat.MANVGH,
            MAKH: phieudat.MAKH,
		})
		.where("MAPD = :MAPD",{MAPD:phieudat.MAPD})
		.execute()

		
	}

	

	async delete(MAPD: string) {
		const phieudat = await this.findById(MAPD)

		if (!phieudat) throw new NotFoundException('PD is not exist')

		return this.phieudatRepo.remove(phieudat)
	}

	async getTotal(ctpds: GetTotalDto) {
		const result = {}
		const promises = []
		for (const ctpd of ctpds.totals) {
			result[ctpd.MADONG] =  ctpd.SOLUONG

			const query = this.phieudatRepo.query(`SELECT * FROM dongruou WHERE MADONG = '${ctpd.MADONG}'`).then(x => x[0])
			promises.push(query)
		}

		const winelines = await Promise.all(promises)

		let total = 0
		for (const winline of winelines) {
			total += winline.GIA * result[winline.MADONG]
		}

		return total
	}

	async getListPdFromTo(from:string,to:string){
		
		return this.phieudatRepo.createQueryBuilder('phieudat')
		.where(`phieudat.NGAYDAT >= '${from}'`)
		.andWhere(`phieudat.NGAYDAT <= '${to}'`)
		.andWhere(`phieudat.TRANGTHAI = 'Đã giao'`)
		.setFindOptions({
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
        })
        .getMany()
		
	}

	async getListPdByNVGH(id: string) {
		return this.phieudatRepo.createQueryBuilder('phieudat')
		.where('phieudat.MANVGH = :id',{id:id})
		.setFindOptions({
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
        })
		.orderBy('phieudat.NGAYDAT','DESC')
		.getMany()
	}

	async getListPdByCustomer(id: string) {
		return this.phieudatRepo.createQueryBuilder('phieudat')
		.where('phieudat.MAKH = :id',{id:id})
		.setFindOptions({
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
        })
		.orderBy('phieudat.NGAYDAT','DESC')
		.getMany()
	}

	async findByStateAndCustomer(TRANGTHAI: string, MAKH: string) {
		if(TRANGTHAI === 'ALL'){
			return this.phieudatRepo.find({
				where: { MAKH: MAKH },
				relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
				order: { NGAYDAT: 'DESC'},
			})
		}
		return this.phieudatRepo.find({
			where: { TRANGTHAI: TRANGTHAI, MAKH:MAKH },
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
			order: { NGAYDAT: 'DESC'},
		})
	}

	async checkSltPayPal (payload: CreatePhieudatDto){
		const { CTPDS } = payload
		for (const ct_phieudat of CTPDS) {
			const createCtPhieudatDto: CreateCtPhieudatDto = {
				MAPD: payload.MAPD,
				MADONG: ct_phieudat.MADONG,
				SOLUONG: ct_phieudat.SOLUONG,
				GIA: ct_phieudat.GIA,
			}
			//check ne
			const bool = await this.winelineService.checkSlt(createCtPhieudatDto.MADONG, createCtPhieudatDto.SOLUONG)
			console.log('bool',bool)
			if(bool === false){
				console.log('in here')
				throw new InternalServerErrorException('Sản phẩm không đủ số lượng trong kho!')
			}
		}
	}
}
