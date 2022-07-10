import { Column, Entity } from "typeorm";

@Entity('dondathang')
export class Order {
    @Column({type:'char', primary:true})
    MADDH!: string

    @Column({type:'date'})
    NGAYDAT!: Date

    @Column({type:'char'})
    MANV!: string

    @Column({type:'char'})
    MANCC!: string
}
