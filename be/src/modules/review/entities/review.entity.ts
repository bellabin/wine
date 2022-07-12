import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

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

    @ManyToOne(() => Wineline, wineline => wineline.reviews)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline
}
