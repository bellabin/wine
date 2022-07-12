import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('thuonghieu')
export class Trademarks {
    @Column ({type:'char', primary: true})
    MATH!: string

    @Column ({type:'varchar'})
    TENTH!: string

    @Column ({type:'varchar'})
    HINHANH!: string

    @OneToMany(() => Wineline, wineline => wineline.trademark)
    winelines: Wineline[]
}
