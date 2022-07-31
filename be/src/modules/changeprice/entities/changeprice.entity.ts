import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('thaydoigia')
export class Changeprice {
    @Column({type:'char', primary:true})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.changeprices)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

    @Column({type:'date', primary:true})
    NGAYTHAYDOI!: Date

    @Column({type:'char', primary:true})
    MANV!: string

    @ManyToOne(() => Staff, staff => staff.changeprices)
    @JoinColumn({name:'MANV'})
    staff: Staff

    @Column({type:'float'})
    GIA!: number
}
