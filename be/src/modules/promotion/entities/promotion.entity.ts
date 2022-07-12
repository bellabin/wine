import { CtPromotion } from "src/modules/ct_promotion/entities/ct_promotion.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('khuyenmai')
export class Promotion {
    @Column({type:'char',primary:true})
    MAKM!: string

    @Column({type:'varchar'})
    TENKM!: string

    @Column({type:'date'})
    NGAYBATDAU!: Date

    @Column({type:'date'})
    NGAYKETTHUC!: Date

    @Column({type:'varchar'})
    LIDO!: string

    @Column({type:'char'})
    MANV!: string

    @ManyToOne(() => Staff, staff => staff.promotions)
    @JoinColumn({name:'MANV'})
    staff: Staff

    @OneToMany(() => CtPromotion, (ct_khuyenmai) => ct_khuyenmai.promotion)
    ct_khuyenmais: CtPromotion[]


    
}
