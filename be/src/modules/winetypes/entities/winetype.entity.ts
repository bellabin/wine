import { Column, Entity } from "typeorm";

@Entity('loairuou')
export class Winetype {
    @Column({type:'char', primary:true})
    MALOAI!: string

    @Column({type:'varchar'})
    TENLOAI!: string
}
