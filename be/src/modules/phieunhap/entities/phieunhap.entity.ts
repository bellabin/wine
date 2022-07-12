import { CtPhieunhap } from "src/modules/ct_phieunhap/entities/ct_phieunhap.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity('phieunhap')
export class Phieunhap {
    @Column({type:'char',primary:true})
    MAPN!: string

    @Column({type:'date'})
    NGAYLAP!: Date

    //@Column({type:'char'})
    //MANV!: string
    @ManyToOne(() => Staff, staff => staff.MANV)
    @JoinColumn({name:'MANV'})
    staff: Staff

    //@Column({type:'char'})
    //MADDH!: string
    @OneToOne(() => Order)
    @JoinColumn({name:'MADDH'})
    order: Order

    @OneToMany(() => CtPhieunhap, ct_phieunhap => ct_phieunhap.phieunhap)
    ct_phieunhaps: CtPhieunhap[]


}
