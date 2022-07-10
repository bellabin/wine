import { Column, Entity } from "typeorm";

@Entity('phieudat')
export class Phieudat {
    @Column({type:'char', primary:true})
    MAPD!: string

    @Column({type:'date'})
    NGAYDAT!: Date

    @Column({type:'varchar'})
    HONN!: string

    @Column({type:'varchar'})
    TENNN!: string

    @Column({type:'varchar'})
    DIACHINN!: string

    @Column({type:'char'})
    SDTNN!: string

    @Column({type:'varchar'})
    GHICHU!: string

    @Column({type:'varchar'})
    TRANGTHAI!: string

    @Column({type:'char'})
    MANVD!: string

    @Column({type:'char'})
    MANVGH!: string

    @Column({type:'char'})
    MAKH!: string
}
