import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('ct_phieutra')
export class CtPhieutra {
    @Column({type:'char',primary:true})
    MAPT!: string

    @Column({type:'int',primary:true})
    IDCTPD!: number

    @Column({type:'int'})
    SOLUONG!: number
}
