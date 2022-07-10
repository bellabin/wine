import { Column, Entity } from "typeorm";

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
}