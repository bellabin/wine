import { Column, Entity } from "typeorm";

@Entity('thuonghieu')
export class Trademarks {
    @Column ({type:'char', primary: true})
    MATH!: string

    @Column ({type:'varchar'})
    TENTH!: string

    @Column ({type:'varchar'})
    HINHANH!: string
}
