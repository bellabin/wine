import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity } from "typeorm";

@Entity('ct_dondathang')
export class CtOrder {
    @Column({type:'char',primary:true})
    MADONG!: string

    @Column({type:'char',primary:true})
    MADDH!: string

    @Column({type:'int'})
    SOLUONG!: number

    @Column({type:'float'})
    GIA!: number
}
