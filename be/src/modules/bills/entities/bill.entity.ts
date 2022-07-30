import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Phieutra } from "src/modules/phieutra/entities/phieutra.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity('hoadon')
export class Bill {
    @Column({type:'char', primary:true})
    MAHD!: string

    @Column({type:'date'})
    NGAY!: Date

    @Column({type:'float'})
    THANHTIEN!: number

    @Column({type:'varchar'})
    MASOTHUE!: string

    @Column({type:'char'})
    MANV!: string

    @ManyToOne(() => Staff, staff => staff.bills)
    @JoinColumn({name:'MANV'})
    staff: Staff

    //@Column({type:'char'})
    //MAPD!: string

    @OneToOne(() => Phieudat , phieudat => phieudat.bill)
    @JoinColumn({name:'MAPD'})
    phieudat: Phieudat

    @OneToMany(() => Phieutra, phieutra => phieutra.bill)
    phieutras: Phieutra[]
}
