import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity } from "typeorm";

@Entity('phieutra')
export class Phieutra {
    @Column({type:'char',primary:true})
    MAPT!: string

    @Column({type:'date'})
    NGAYTRA!: Date

    @Column({type:'char'})
    MAHD!: string

    @Column({type:'char'})
    MANV!: string
}
