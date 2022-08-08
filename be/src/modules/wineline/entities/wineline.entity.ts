import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";
import { Changeprice } from "src/modules/changeprice/entities/changeprice.entity";
import { CtOrder } from "src/modules/ct_order/entities/ct_order.entity";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { CtPhieunhap } from "src/modules/ct_phieunhap/entities/ct_phieunhap.entity";
import { CtPhieutra } from "src/modules/ct_phieutra/entities/ct_phieutra.entity";
import { CtPromotion } from "src/modules/ct_promotion/entities/ct_promotion.entity";
import { Cungcap } from "src/modules/cungcap/entities/cungcap.entity";
import { Review } from "src/modules/review/entities/review.entity";
import { Trademarks } from "src/modules/trademarks/entities/trademarks.entity";
import { Winetype } from "src/modules/winetypes/entities/winetype.entity";
import { Column,Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity('dongruou')
export class Wineline {
    @Column({type :'char', primary: true})
    MADONG!: string

    @Column({type: 'varchar'})
    TENDONG!: string

    // @Column({type:'float'})
    // GIA!: number

    

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

    // @Column({type:'char'})
    // MALOAI!: string

    @ManyToOne(() => Winetype, winetype => winetype.winelines)
    @JoinColumn({name:'MALOAI'})
    winetype: Winetype

    @Column({type:'char'})
    MATH!: string

    @ManyToOne(() => Trademarks, trademark => trademark.winelines)
    @JoinColumn({name:'MATH'})
    trademark: Trademarks

    @Column({type:'char'})
    MANCC!: string

    @OneToMany(() => CtPhieudat, ct_phieudat => ct_phieudat.wineline)
    ct_phieudats: CtPhieudat[]

    @OneToMany(() => CtPhieunhap, ct_phieunhap => ct_phieunhap.wineline)
    ct_phieunhaps: CtPhieunhap[]

    @OneToMany(() => Changeprice, changeprice => changeprice.wineline)
    changeprices: Changeprice[]

    @OneToMany(() => Cungcap, (cungcap) => cungcap.wineline)
    cungcaps: Cungcap[]

    @OneToMany(() => CtPromotion, (ct_khuyenmai) => ct_khuyenmai.wineline)
    ct_khuyenmais: CtPromotion[]

    @OneToMany(() => CtOrder, (ct_dondathang) => ct_dondathang.wineline)
    ct_orders: CtOrder[]

    @OneToMany(() => Review, (review) => review.wineline)
    reviews: Review[]

    

}
