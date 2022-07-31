import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Review } from "src/modules/review/entities/review.entity";
import { Role } from "src/modules/role/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity ('khachhang')
export class Customer {
    @Column({ type: 'char', primary: true })
    MAKH!: string

    @Column({ type: 'varchar'})
    HO!: string

    @Column({ type: 'varchar'})
    TEN!: string

    @Column({ type: 'varchar'})
    GIOITINH!: string

    @Column({ type: 'date'})
    NGAYSINH!: Date

    @Column({ type: 'varchar'})
    DIACHI!: string

    @Column({ type: 'varchar'})
    SDT!: string

    @Column({ type: 'varchar'})
    EMAIL!: string

    @Column({ type: 'varchar'})
    USERNAME!: string

    @Column({ type: 'varchar'})
    PASSWORD!: string

    @Column({ type: 'char'})
    MANQ!: string

    @ManyToOne(() => Role, role => role.customers)
    @JoinColumn({name:'MANQ'})
    role: Role

    @OneToMany(() => Phieudat, (phieudat) => phieudat.customer)
    phieudats: Phieudat[]

    @OneToMany(() => Review, (review) => review.customer)
    reviews: Review[]
}