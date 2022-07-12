import { Phieutra } from "src/modules/phieutra/entities/phieutra.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('ct_phieutra')
export class CtPhieutra {
    @Column({type:'char',primary:true})
    MAPT!: string
    
    @ManyToOne((type:'char') => Phieutra, phieutra => phieutra.MAPT)
    @JoinColumn({name:'MAPT'})
    phieutra: Phieutra

    @Column({type:'int',primary:true})
    IDCTPD!: number

    @Column({type:'int'})
    SOLUONG!: number
}
