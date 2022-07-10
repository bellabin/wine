import { Column, Entity } from "typeorm";

@Entity('phieunhap')
export class Phieunhap {
    @Column({type:'char',primary:true})
    MAPN!: string

    @Column({type:'date'})
    NGAYLAP!: Date

    @Column({type:'char'})
    MANV!: string

    @Column({type:'char'})
    MADDH!: string
}
