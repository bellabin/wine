import { CtOrder } from "src/modules/ct_order/entities/ct_order.entity";
import { Provider } from "src/modules/provider/entities/provider.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('dondathang')
export class Order {
    @Column({type:'char', primary:true})
    MADDH!: string

    @Column({type:'date'})
    NGAYDAT!: Date

    @Column({type:'char'})
    MANV!: string

    @ManyToOne(() => Staff, staff => staff.orders)
    @JoinColumn({name:'MANV'})
    staff: Staff

    @Column({type:'char'})
    MANCC!: string

    @ManyToOne(() => Provider, provider => provider.orders)
    @JoinColumn({name:'MANCC'})
    provider: Provider

    @OneToMany(() => CtOrder, (ct_dondathang) => ct_dondathang.order)
    ct_orders: CtOrder[]
}
