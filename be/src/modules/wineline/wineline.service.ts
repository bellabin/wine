import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateWinelineDto } from './dto/create-wineline.dto'
import { UpdateWinelineDto } from './dto/update-wineline.dto'
import { Wineline } from './entities/wineline.entity'
import findProductByNameQuery from './queries/findProductByName'
import HotProductQuery from './queries/hot-products.query'

@Injectable()
export class WinelineService {
    constructor(
        @InjectRepository(Wineline) private winelineRepo: Repository<Wineline> //inject repo
    ) {}

    findAll() { //function handle get list wineline
        return this.winelineRepo.find({
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews','ct_phieutras'],
          })
    }

    findById(MADONG: string) {
        return this.winelineRepo.findOne({
            where: { MADONG: MADONG   },
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews','ct_phieutras'],
            
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

    async delete(MADONG: string) {
        const wineline = await this.findById(MADONG)

        if (!wineline) throw new NotFoundException('Wineline is not exist')

        return this.winelineRepo.remove(wineline)
    }

    async getHotProducts() {
        return this.winelineRepo.query(HotProductQuery)
    }


    async getProductsByType(MALOAI: string) {
    
        return this.winelineRepo.createQueryBuilder('wineline')
        .innerJoinAndSelect('wineline.winetype', 'winetype')
        .where('wineline.winetype.MALOAI =:MALOAI',{MALOAI:MALOAI})
        .getMany()
        //.where('winetypes.MALOAI =:MALOAI', {MALOAI})
    }
    async findProductByName(name: string) {
        // const query = this.winelineRepo.createQueryBuilder('wineline')
        //     .where('INSTR(wineline.TENDONG, :name) > 0', {name: name})
        //     .setFindOptions({
        //         relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews','ct_phieutras']
        //     }).getQuery();
        // console.log('query ne', query);
        return this.winelineRepo.createQueryBuilder('wineline')
            .where('INSTR(wineline.TENDONG, :name) > 0', {name: name})
            .setFindOptions({
                relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews','ct_phieutras']
            })
            .getMany();
    }

    async getTopPromoProduct(){
        // const query = this.winelineRepo.createQueryBuilder('wineline')
        // .where('wineline__wineline_ct_khuyenmais.PHANTRAMGIAM >= 30')
        // .setFindOptions({
        //     relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews','ct_phieutras']
        // }).getQuery()
        // console.log('qr:', query)
        return this.winelineRepo.createQueryBuilder('wineline')
        .where('wineline__wineline_ct_khuyenmais.PHANTRAMGIAM >= 30')
        .setFindOptions({
            relations: ['winetype','trademark','ct_phieudats','ct_phieunhaps','changeprices','cungcaps','ct_khuyenmais','ct_orders','reviews','ct_phieutras']
        })
        .getMany();
        //chua update ngay
    }
}
