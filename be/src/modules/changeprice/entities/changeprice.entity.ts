import { Column, Entity } from "typeorm";

@Entity('thaydoigia')
export class Changeprice {
    @Column({type:'char', primary:true})
    MADONG!: string

    @Column({type:'date', primary:true})
    NGAYTHAYDOI!: Date

    @Column({type:'char', primary:true})
    MANV!: string

    @Column({type:'float'})
    BIENDONGGIA!: number
}
