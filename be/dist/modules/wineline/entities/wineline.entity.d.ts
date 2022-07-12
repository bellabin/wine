import { Changeprice } from "src/modules/changeprice/entities/changeprice.entity";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { CtPromotion } from "src/modules/ct_promotion/entities/ct_promotion.entity";
import { Cungcap } from "src/modules/cungcap/entities/cungcap.entity";
import { Review } from "src/modules/review/entities/review.entity";
import { Trademarks } from "src/modules/trademarks/entities/trademarks.entity";
import { Winetype } from "src/modules/winetypes/entities/winetype.entity";
export declare class Wineline {
    MADONG: string;
    TENDONG: string;
    GIA: number;
    TRANGTHAI: string;
    HINHANH: string;
    MOTA: string;
    CHITIET: string;
    SOLUONGTON: number;
    MALOAI: string;
    winetype: Winetype;
    MATH: string;
    trademark: Trademarks;
    MANCC: string;
    ct_phieudats: CtPhieudat[];
    ct_phieunhaps: CtPhieudat[];
    changeprices: Changeprice[];
    cungcaps: Cungcap[];
    ct_khuyenmais: CtPromotion[];
    ct_orders: CtPromotion[];
    reviews: Review[];
}
