import { Customer } from "src/modules/customers/entities/customer.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('danhgia')
export class Review {
    @Column({type:'int', primary:true})
    MAKH!: string

    @ManyToOne(() => Customer, customer => customer.reviews)
    @JoinColumn({name:'MAKH'})
    customer: Customer


    @Column({type:'varchar'})
    NOIDUNG!: string

    @Column({type:'int'})
    RATING!: number
    
   

    @Column({type:'datetime', primary: true})
    NGAYDANHGIA!: Date

    @Column({type:'char', primary:true})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.reviews)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline
}
