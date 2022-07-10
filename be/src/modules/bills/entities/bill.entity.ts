import { Column, Entity } from "typeorm";

@Entity('hoadon')
export class Bill {
    @Column({type:'char', primary:true})
    MAHD!: string

    @Column({type:'date'})
    NGAY!: Date

    @Column({type:'float'})
    THANHTIEN!: number

    @Column({type:'varchar'})
    MASOTHUE!: string

    @Column({type:'char'})
    MANV!: string

    @Column({type:'char'})
    MAPD!: string
}
