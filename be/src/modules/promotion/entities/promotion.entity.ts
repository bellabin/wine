import { Column, Entity } from "typeorm";

@Entity('khuyenmai')
export class Promotion {
    @Column({type:'char',primary:true})
    MAKM!: string

    @Column({type:'varchar'})
    TENKM!: string

    @Column({type:'date'})
    NGAYBATDAU!: Date

    @Column({type:'date'})
    NGAYKETTHUC!: Date

    @Column({type:'varchar'})
    LIDO!: string

    @Column({type:'char'})
    MANV!: string
}
