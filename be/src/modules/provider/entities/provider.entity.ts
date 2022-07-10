import { Column,Entity } from "typeorm";

@Entity('nhacungcap')
export class Provider {
    @Column({type:'char', primary: true})
    MANCC!: string

    @Column({type:'varchar'})
    TENNCC!: string

    @Column({type:'varchar'})
    DIACHI!: string

    @Column({type:'varchar'})
    EMAIL!: string

    @Column({type:'char'})
    SDT!: string
}
