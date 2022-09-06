import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateWinelineDto } from './dto/create-wineline.dto'
import { UpdateWinelineDto } from './dto/update-wineline.dto'
import { Wineline } from './entities/wineline.entity'
import findProductByNameQuery from './queries/findProductByName'
import HotProductQuery from './queries/hot-products.query'
import {checkKm, checkPrice, toDecimal} from './convertPrice'
import { WinetypeService } from '../winetypes/winetype/winetype.service'
import { Changeprice } from '../changeprice/entities/changeprice.entity'
import { ChangepriceService } from '../changeprice/changeprice.service'

@Injectable()
export class WinelineService {
    constructor(
        @InjectRepository(Wineline) private winelineRepo: Repository<Wineline>, //inject repo
        private winetypeService: WinetypeService,
        private changePriceService: ChangepriceService,
        
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

        console.log(payload)

        const lastWineline = await this.winelineRepo
            .createQueryBuilder('wineline')
            .orderBy('wineline.MADONG', "DESC")
            .limit(1)
            .getOne();
        const lastId = Number(lastWineline.MADONG) + 1;
        payload.MADONG = lastId.toLocaleString('en-US', {
            minimumIntegerDigits: 3,
            useGrouping: false
        });

        

        const wineline = new Wineline //create nhung chua duoc save
        wineline.MADONG = payload.MADONG
        wineline.TENDONG = payload.TENDONG
        wineline.CHITIET = payload.CHITIET
        wineline.MOTA = payload.MOTA
        wineline.SOLUONGTON = payload.SOLUONGTON
        wineline.HINHANH = payload.HINHANH
        wineline.TRANGTHAI = payload.TRANGTHAI
        wineline.MATH = payload.MATH
        wineline.winetype = await this.winetypeService.findById(payload.MALOAI)
        wineline.cungcaps = []
        // wineline.changeprices = [change_price]
        await this.winelineRepo.save(wineline) //khi save thi data moi duoc luu vao db

        
        console.log(wineline)

        // console.log(payload.MANV)

        const change_price = new Changeprice
        change_price.MADONG = payload.MADONG
        change_price.NGAYTHAYDOI = new Date
        change_price.MANV = payload.MANV
        change_price.GIA = payload.GIA

        await this.changePriceService.create(change_price)


        return wineline
    }

    async update(MADONG: string, body: UpdateWinelineDto) {
        // console.log('ser',MADONG ,body)

        const winetype1 = await this.winetypeService.findById(body.MALOAI)
        // wineline.cungcaps = []
        // wineline.changeprices = [change_price]
        await this.winelineRepo.createQueryBuilder('wineline') //khi save thi data moi duoc luu vao db
        .update(Wineline)
        .set({
            TENDONG: body.TENDONG,
            TRANGTHAI: body.TRANGTHAI,
            HINHANH: body.HINHANH,
            MOTA: body.MOTA,
            CHITIET: body.CHITIET,
            SOLUONGTON: body.SOLUONGTON,
            MATH: body.MATH,
            winetype: winetype1
        })
        .where("MADONG = :id", {id: MADONG})
        .execute()

        const wineline1 = await this.findById(MADONG)
        
        // console.log(wineline)

        // console.log(payload.MANV)

        const change_price = new Changeprice
        change_price.MADONG = MADONG
        change_price.NGAYTHAYDOI = new Date
        change_price.MANV = body.MANV
        change_price.GIA = body.GIA

        await this.changePriceService.create(change_price)


        return wineline1
    }

    async updateSLT(MADONG: string, slt: number) {
        console.log('md',MADONG)

        
            const wineline = await this.findById(MADONG)

        if (!wineline) throw new NotFoundException('Wineline is not exist')

        // if(wineline.SOLUONGTON < slt) throw new NotFoundException('Not enough!')

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
        let date = new Date
        let data1 = await this.winelineRepo.query(`
        SELECT k.TENKM , k.NGAYBATDAU , k.NGAYKETTHUC , ck.PHANTRAMGIAM, d.MADONG  
        FROM khuyenmai k 
        inner join ct_khuyenmai ck 
        on ck.MAKM = k.MAKM 
        and ck.PHANTRAMGIAM > 30
        INNER join dongruou d 
        on d.MADONG = ck.MADONG 
        WHERE k.NGAYBATDAU <= CURRENT_DATE()  and k.NGAYKETTHUC >= CURRENT_DATE()`)

        var listProducts = []
        
        data1.map(cur => {
            listProducts.push(this.findById(cur.MADONG).then())
        })

        let result = await Promise.all(listProducts)

        return result
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

    async checkSlt(MADONG: string, SOLUONG: number){
        const product = await this.findById(MADONG)
        if(product.SOLUONGTON < SOLUONG){
            return false
        }
        return true
    }
}
