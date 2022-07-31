import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('ct_phieudat')
export class CtPhieudat {
    @Column({type:'int', primary:true})
    IDCTPD!: number

    @Column({type:'char'})
    MAPD!: string
    
    @ManyToOne(() => Phieudat, phieudat => phieudat.ct_phieudats)
    @JoinColumn({name:'MAPD'})
    phieudat: Phieudat
    

    @Column({type:'char'})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.ct_phieudats)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

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
