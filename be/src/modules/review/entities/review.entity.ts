import { Column, Entity } from "typeorm";

@Entity('danhgia')
export class Review {
    @Column({type:'int', primary:true})
    MADANHGIA!: number

    @Column({type:'varchar'})
    NOIDUNG!: string

    @Column({type:'varchar'})
    TEN!: string
    
    @Column({type:'varchar'})
    EMAIL!: string

    @Column({type:'datetime'})
    DATE!: Date

    @Column({type:'char'})
    MADONG!: string
}
