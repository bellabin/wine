import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Order } from "src/modules/order/entities/order.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('ct_dondathang')
export class CtOrder {
    @Column({type:'char',primary:true})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.ct_orders)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

    @Column({type:'char',primary:true})
    MADDH!: string
    
    @ManyToOne(() => Order, order => order.ct_orders)
    @JoinColumn({name:'MADDH'})
    order: Order

    @Column({type:'int'})
    SOLUONG!: number

    @Column({type:'float'})
    GIA!: number
}
