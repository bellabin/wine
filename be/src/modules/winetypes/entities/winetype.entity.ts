import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('loairuou')
export class Winetype {
    @Column({type:'char', primary:true})
    MALOAI!: string

    @OneToMany(() => Wineline, (wineline) => wineline.winetype)
    winelines: Wineline[]

    @Column({type:'varchar'})
    TENLOAI!: string
}
