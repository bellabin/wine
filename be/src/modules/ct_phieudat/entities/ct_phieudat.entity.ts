import { ApiProperty } from "@nestjs/swagger";
import { CtPhieutra } from "src/modules/ct_phieutra/entities/ct_phieutra.entity";
import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ct_phieudat')
export class CtPhieudat {
    @Column({ type:'int', generated: true, primary: true })
    IDCTPD: number 

    @ApiProperty()
    @Column({type:'char'})
    MAPD!: string
    
    @ManyToOne(() => Phieudat, phieudat => phieudat.ct_phieudats)
    @JoinColumn({name:'MAPD'})
    phieudat: Phieudat
    

    @ApiProperty()
    @Column({type:'char'})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.ct_phieudats)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

    @ApiProperty()
    @Column({type:'int'})
    SOLUONG!: number

    @ApiProperty()
    @Column({type:'float'})
    GIA!: number

    @OneToMany(() => CtPhieutra, ct_phieudat => ct_phieudat.ct_phieudat)
    ct_phieutras: CtPhieutra[]
}
