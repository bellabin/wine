import { Column, Entity } from "typeorm";

@Entity('ct_khuyenmai')
export class CtPromotion {
    @Column({type:'char',primary:true})
    MAKM!: string

    @Column({type:'char',primary:true})
    MADONG!: string

    @Column({type:'int'})
    PHANTRAMGIAM!: number
}
