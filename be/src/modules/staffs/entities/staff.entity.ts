import { Bill } from "src/modules/bills/entities/bill.entity";
import { Changeprice } from "src/modules/changeprice/entities/changeprice.entity";
import { Order } from "src/modules/order/entities/order.entity";
import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Phieunhap } from "src/modules/phieunhap/entities/phieunhap.entity";
import { Phieutra } from "src/modules/phieutra/entities/phieutra.entity";
import { Promotion } from "src/modules/promotion/entities/promotion.entity";
import { Role } from "src/modules/role/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('nhanvien') //ten table trong db
export class Staff {
    @Column({ type: 'char', primary: true })
    MANV!: string
    
    @Column({type: 'varchar'})
    HO!: string

    @Column({type:'varchar'})
    TEN!: string

    @Column({type: 'varchar'})
    GIOITINH!: string

    @Column({type: 'date'})
    NGAYSINH!: Date

    @Column({type: 'varchar'})
    DIACHI!: string

    @Column({type:'varchar'})
    SDT!: string

    @Column({type:'varchar'})
    EMAIL!: string

    @Column({type:'varchar'})
    USERNAME!: string

    @Column({type:'varchar'})
    PASSWORD!: string

    @Column({type:'char'})
    MANQ!: string

    @ManyToOne(() => Role, role => role.staffs)
    @JoinColumn({name:'MANQ'})
    role: Role
    

    @OneToMany(() => Phieudat, (phieudat) => phieudat.staff)
    phieudats: Phieudat[]

    @OneToMany(() => Phieunhap, (phieunhap) => phieunhap.staff)
    phieunhaps: Phieunhap[]

    @OneToMany(() => Phieutra, (phieutra) => phieutra.staff)
    phieutras: Phieutra[]

    @OneToMany(() => Changeprice, (changeprice) => changeprice.staff)
    changeprices: Changeprice[]

    @OneToMany(() => Bill, (bill) => bill.staff)
    bills: Bill[]

    @OneToMany(() => Promotion, (promotion) => promotion.staff)
    promotions: Promotion[]

    @OneToMany(() => Order, (order) => order.staff)
    orders: Order[]
}