import { Column, Entity } from "typeorm";

@Entity('nhomquyen')
export class Role {
    @Column({type:'char', primary:true})
    MANQ!: string

    @Column({type:'varchar'})
    TENNQ!: string
}
