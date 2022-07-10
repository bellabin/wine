import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";
import { Column,Entity } from "typeorm";

@Entity('dongruou')
export class Wineline {
    @Column({type :'char', primary: true})
    MADONG!: string

    @Column({type: 'varchar'})
    TENDONG!: string

    @Column({type:'float'})
    GIA!: number

    @Column({type:'varchar'})
    TRANGTHAI!: string

    @Column({type:'varchar'})
    HINHANH!: string

    @Column({type:'varchar'})
    MOTA!: string

    @Column({type:'varchar'})
    CHITIET!: string

    @Column({type:'int'})
    SOLUONGTON!: number

    @Column({type:'char'})
    MALOAI!: string

    @Column({type:'char'})
    MATH!: string

    @Column({type:'char'})
    MANCC!: string
}
