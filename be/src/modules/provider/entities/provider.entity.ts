import { Cungcap } from "src/modules/cungcap/entities/cungcap.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Column,Entity, OneToMany } from "typeorm";

@Entity('nhacungcap')
export class Provider {
    @Column({type:'char', primary: true})
    MANCC!: string

    @Column({type:'varchar'})
    TENNCC!: string

    @Column({type:'varchar'})
    DIACHI!: string

    @Column({type:'varchar'})
    EMAIL!: string

    @Column({type:'char'})
    SDT!: string

    @OneToMany(() => Order, (order) => order.provider)
    orders: Order[]

    @OneToMany(() => Cungcap, (cungcap) => cungcap.provider)
    cungcaps: Cungcap[]
}
