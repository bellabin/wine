import { Column, Entity } from "typeorm";

@Entity('ct_phieunhap')
export class CtPhieunhap {
    @Column({type:'char',primary:true})
    MAPN!: string

    @Column({type:'char',primary:true})
    MADONG!: string

    @Column({type:'int'})
    SOLUONG!: number

    @Column({type:'float'})
    GIA!: number
}
