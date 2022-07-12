import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Bill } from "src/modules/bills/entities/bill.entity";
import { CtPhieutra } from "src/modules/ct_phieutra/entities/ct_phieutra.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('phieutra')
export class Phieutra {
    @Column({type:'char',primary:true})
    MAPT!: string

    @Column({type:'date'})
    NGAYTRA!: Date

    //@Column({type:'char'})
    //MAHD!: string
    @ManyToOne(() => Bill, bill => bill.MAHD)
    @JoinColumn({name:'MAHD'})
    bill: Bill

    //@Column({type:'char'})
    //MANV!: string
    @ManyToOne(() => Staff, staff => staff.MANV)
    @JoinColumn({name:'MANV'})
    staff: Staff

    @OneToMany(() => CtPhieutra, ct_phieutra => ct_phieutra.phieutra)
    ct_phieutras: CtPhieutra[]
}
