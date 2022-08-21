import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateWinelineDto } from './dto/create-wineline.dto'
import { UpdateWinelineDto } from './dto/update-wineline.dto'
import { Wineline } from './entities/wineline.entity'
import findProductByNameQuery from './queries/findProductByName'
import HotProductQuery from './queries/hot-products.query'
import {checkKm, checkPrice, toDecimal} from './convertPrice'

@Injectable()
export class WinelineService {
    constructor(
        @InjectRepository(Wineline) private winelineRepo: Repository<Wineline> //inject repo
    ) {}

    findAll() { //function handle get list wineline
			return this.winelineRepo.find({
				relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','cungcaps','ct_khuyenmais','ct_orders','reviews','changeprices'],
			})
        return this.winelineRepo.find({
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews'],
          })
    }

    findById(MADONG: string) {
			return this.winelineRepo.findOne({
				where: { MADONG: MADONG   },
				relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','cungcaps','ct_khuyenmais','ct_orders','reviews','changeprices'],
			})
        return this.winelineRepo.findOne({
            where: { MADONG: MADONG   },
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews'],
          })
        // console.log('123');
        // const one = this.winelineRepo
        // .createQueryBuilder('wineline')
        // .where('wineline.MADONG = :MADONG', { MADONG })
        // .getOne();
        // const two = one.then(i => console.log(i.winetype))
        // return one;
    }

    findById2(MADONG: string) {
        return this.winelineRepo.findOne({
            where: { MADONG: MADONG   },
            relations: ['winetype','trademark','ct_khuyenmais','changeprices'],
        })
    return this.winelineRepo.findOne({
        where: { MADONG: MADONG   },
        relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews'],
      })
    // console.log('123');
    // const one = this.winelineRepo
    // .createQueryBuilder('wineline')
    // .where('wineline.MADONG = :MADONG', { MADONG })
    // .getOne();
    // const two = one.then(i => console.log(i.winetype))
    // return one;
}

    async create(payload: CreateWinelineDto) { //func handle create new wineline
        const wineline = this.winelineRepo.create(payload) //create nhung chua duoc save

        await this.winelineRepo.save(wineline) //khi save thi data moi duoc luu vao db

        return wineline
    }

    async update(MADONG: string, body: UpdateWinelineDto) {
        const wineline = await this.findById(MADONG)

        if (!wineline) throw new NotFoundException('Wineline is not exist')

        return this.winelineRepo.update(MADONG, body)
    }

    async updateSLT(MADONG: string, slt: number) {
        const wineline = await this.findById(MADONG)

        if (!wineline) throw new NotFoundException('Wineline is not exist')

        if(wineline.SOLUONGTON < slt) throw new NotFoundException('Not enough!')

        return this.winelineRepo.createQueryBuilder('wineline')
		.update(Wineline)
		.set({
            SOLUONGTON: wineline.SOLUONGTON - slt,
		})
		.where("MADONG = :MADONG",{MADONG:MADONG})
		.execute()
    }

    async delete(MADONG: string) {
        const wineline = await this.findById(MADONG)

        if (!wineline) throw new NotFoundException('Wineline is not exist')

        return this.winelineRepo.remove(wineline)
    }

    async getHotProducts() {
        
        let arr = await this.winelineRepo.query(`
        SELECT sum(cp.SOLUONG) as so_luong_ban, cp.MADONG ,  d.TENDONG , d.HINHANH
        FROM ct_phieudat cp
        INNER JOIN (
            SELECT *
            FROM phieudat p
            WHERE p.NGAYDAT >= (curdate() - INTERVAL 180 DAY)
        ) p ON cp.MAPD = p.MAPD
        INNER JOIN dongruou d on cp.MADONG = d.MADONG and d.SOLUONGTON > 0
        GROUP BY cp.MADONG
        ORDER BY so_luong_ban DESC LIMIT 5
        `)
        
        let listHot = []
        arr.map(cur => {
            listHot.push(cur.MADONG)
        })

        // this.getListProductByArr(listHot)
        let listProducts = []
        listHot.map(cur => {
            listProducts.push( this.findById(cur).then())
        })
        
        let result = await Promise.all(listProducts)

        return result
    }


    async getProductsByType(MALOAI: string) {

        return this.winelineRepo.createQueryBuilder('wineline')
        .where('wineline.winetype.MALOAI =:MALOAI',{MALOAI:MALOAI})
        .setFindOptions({
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews']
        })
        .getMany()
        //.where('winetypes.MALOAI =:MALOAI', {MALOAI})
    }
    async findProductByName(name: string) {
        // const query = this.winelineRepo.createQueryBuilder('wineline')
        //     .where('INSTR(wineline.TENDONG, :name) > 0', {name: name})
        //     .setFindOptions({
        //         relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews']
        //     }).getQuery();
        // console.log('query ne', query);
        return this.winelineRepo.createQueryBuilder('wineline')
            .where('INSTR(wineline.TENDONG, :name) > 0', {name: name})
            .setFindOptions({
                relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews']
            })
            .getMany();
    }

    async getTopPromoProduct(){
        return this.winelineRepo.createQueryBuilder('wineline')
        .where('wineline__wineline_ct_khuyenmais.PHANTRAMGIAM >= 30')
        .setFindOptions({
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews']
        })
        .getMany();
        //chua update ngay
    }

    async getListProductByArr(payload:[]) {
        let listProducts = []
        payload.map(cur => {
            listProducts.push( this.findById(cur).then())
        })
        
        let result = await Promise.all(listProducts)

        return result
    }


    async getDetailPaypal(payload:[]) {
        const listArr = []
        for (let i = 0; i < payload.length; i++) {
            const cur = payload[i] as any
            const product = await this.findById2(cur.productId)
            const price = checkPrice(product.changeprices)
            const promoPrice = checkPrice(product.changeprices) * toDecimal(checkKm(product.ct_khuyenmais)) 
            const quantityCur = cur.quantity
            const newObj = {
                product: product,
                price: price - promoPrice,
                quantity: quantityCur,
                
            }

            listArr.push(newObj)
        }

        return listArr
    }


    async getQuantity(madong: string) {
        return this.winelineRepo.query(`
        SELECT soluongton from dongruou d 
        WHERE d.MADONG = ${madong}
        `)
    }
}
