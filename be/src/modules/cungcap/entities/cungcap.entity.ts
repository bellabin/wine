import { Column, Entity } from "typeorm";

@Entity('cungcap')
export class Cungcap {
    @Column({type:'char',primary:true})
    MANCC!: string

    @Column({type:'char',primary:true})
    MADONG!: string

    @Column({type:'float'})
    GIA!: number
}
