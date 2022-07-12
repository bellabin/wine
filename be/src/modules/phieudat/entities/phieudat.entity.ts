import { Bill } from "src/modules/bills/entities/bill.entity";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { Customer } from "src/modules/customers/entities/customer.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity('phieudat')
export class Phieudat {
    @Column({type:'char', primary:true})
    MAPD!: string

    @Column({type:'date'})
    NGAYDAT!: Date

    @Column({type:'varchar'})
    HONN!: string

    @Column({type:'varchar'})
    TENNN!: string

    @Column({type:'varchar'})
    DIACHINN!: string

    @Column({type:'char'})
    SDTNN!: string

    @Column({type:'varchar'})
    GHICHU!: string

    @Column({type:'varchar'})
    TRANGTHAI!: string

    //@Column({type:'char'})
    //MANVD!: string
    @ManyToOne((type:'char') => Staff, (staff) => staff.MANV)
    @JoinColumn({name:'MANVD'})
    staff: Staff

    @Column({type:'char'})
    MANVGH!: string

    @Column({type:'char'})
    MAKH!: string

    @ManyToOne((type:'char') => Customer, (customer) => customer.phieudats)
    @JoinColumn({name:'MAKH'})
    customer: Customer

    @OneToMany(() => CtPhieudat, ct_phieudat => ct_phieudat.phieudat)
    ct_phieudats: CtPhieudat[]

    


    


    

}
