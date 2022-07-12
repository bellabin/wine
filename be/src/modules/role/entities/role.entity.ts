import { Customer } from "src/modules/customers/entities/customer.entity";
import { Staff } from "src/modules/staffs/entities/staff.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('nhomquyen')
export class Role {
    @Column({type:'char', primary:true})
    MANQ!: string

    @Column({type:'varchar'})
    TENNQ!: string

    @OneToMany(() => Staff, staff => staff.role)
    staffs: Staff[]

    @OneToMany(() => Customer, customer => customer.role)
    customers: Customer[]
}
