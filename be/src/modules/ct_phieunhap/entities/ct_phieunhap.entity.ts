import { Phieunhap } from "src/modules/phieunhap/entities/phieunhap.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

@Entity('ct_phieunhap')
export class CtPhieunhap {
    @Column({type:'char', primary:true})
    MAPN!: string

    @Column({type:'char', primary:true})
    MADONG!: string
    
    //@Column({type:'char',primary:true})
    @ManyToOne(() => Phieunhap, phieunhap => phieunhap.MAPN)
    @JoinColumn({name:'MAPN'})
    phieunhap: Phieunhap

    @ManyToOne(() => Wineline, wineline => wineline.ct_phieunhaps)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

    @Column({type:'int'})
    SOLUONG!: number

    @Column({type:'float'})
    GIA!: number

    
}
