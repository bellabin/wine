import { Promotion } from "src/modules/promotion/entities/promotion.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('ct_khuyenmai')
export class CtPromotion {
    @Column({type:'char',primary:true})
    MAKM!: string

    @ManyToOne(() => Promotion, promotion => promotion.ct_khuyenmais)
    @JoinColumn({name:'MAKM'})
    promotion: Promotion

    @Column({type:'char',primary:true})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.ct_khuyenmais)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

    @Column({type:'int'})
    PHANTRAMGIAM!: number
}
