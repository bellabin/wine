import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CtPhieudatService } from 'src/modules/ct_phieudat/ct_phieudat.service'
import { CreateCtPhieudatDto } from 'src/modules/ct_phieudat/dto/create-ct_phieudat.dto'
import { Repository } from 'typeorm'
import { CreatePhieudatDto } from '../dto/create-phieudat.dto'
import { UpdatePhieudatDto } from '../dto/update-phieudat.dto'
import { Phieudat } from '../entities/phieudat.entity'
import { v4 as uuidv4 } from 'uuid'
import { DEFAULT_MANV } from 'src/constants/constant'
import { CtPhieudat } from 'src/modules/ct_phieudat/entities/ct_phieudat.entity'
import { GetTotalDto } from '../dto/get-total.dto'
import { UpdateCtPhieudatDto } from 'src/modules/ct_phieudat/dto/update-ct_phieudat.dto'
import { StaffService } from 'src/modules/staffs/staff.service'

@Injectable()
export class PhieudatService {
	constructor(
		@InjectRepository(Phieudat) private phieudatRepo: Repository<Phieudat>, //inject repo
		private ctPhieuDatService: CtPhieudatService,
		private staffService : StaffService
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
			})
		}
		return this.phieudatRepo.find({
			where: { TRANGTHAI: TRANGTHAI },
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
		})
	}

	async findByStateAndNVGH(TRANGTHAI: string, MANV: string) {
		if(TRANGTHAI === 'ALL'){
			return this.phieudatRepo.find({
				where: { MANVGH: MANV },
				relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
			})
		}
		return this.phieudatRepo.find({
			where: { TRANGTHAI: TRANGTHAI, MANVGH:MANV },
			relations: ['staff', 'customer', 'ct_phieudats', 'bill'],
		})
	}

	async create(payload: CreatePhieudatDto) {
		//func handle create new pd
		const phieudat = this.phieudatRepo.create(payload) //create nhung chua duoc save

		await this.phieudatRepo.save(phieudat) //khi save thi data moi duoc luu vao db

		const { CTPDS } = payload

		const promises = []

		for (const ct_phieudat of CTPDS) {
			const createCtPhieudatDto: CreateCtPhieudatDto = {
				MAPD: payload.MAPD,
				MADONG: ct_phieudat.MADONG,
				SOLUONG: ct_phieudat.SOLUONG,
				GIA: ct_phieudat.GIA,
			}

			promises.push(this.ctPhieuDatService.create(createCtPhieudatDto))
		}

		const cTPDs = await Promise.all(promises)

		phieudat.ct_phieudats = cTPDs

		return phieudat
	}

	async update(MAPD: string, payload: UpdatePhieudatDto) {
		const phieudat = await this.findById(MAPD)

		if (!phieudat) throw new NotFoundException('PD is not exist')

		const staff = await this.staffService.findById(payload.MANVD)

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
		.where('phieudat.NGAYDAT >= :from', { from })
		.andWhere('phieudat.NGAYDAT <= :to', { to })
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
		.getMany()
	}
}
