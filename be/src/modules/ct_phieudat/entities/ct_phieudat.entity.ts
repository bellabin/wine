import { Column, Entity } from "typeorm";

@Entity('ct_phieudat')
export class CtPhieudat {
    @Column({type:'int', primary:true})
    IDCTPD!: number

    @Column({type:'char', primary:true})
    MAPD!: string

    @Column({type:'char', primary:true})
    MADONG!: string

    @Column({type:'int'})
    SOLUONG!: number

    @Column({type:'float'})
    GIA!: number

    @Column({type:'varchar'})
    TRANGTHAI!: string

    @Column({type:'char'})
    MANVDH!: string

    @Column({type:'char'})
    MANVGH!: string
}
