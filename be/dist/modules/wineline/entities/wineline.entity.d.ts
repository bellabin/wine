import { Changeprice } from "src/modules/changeprice/entities/changeprice.entity";
import { CtOrder } from "src/modules/ct_order/entities/ct_order.entity";
import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { CtPhieunhap } from "src/modules/ct_phieunhap/entities/ct_phieunhap.entity";
import { CtPromotion } from "src/modules/ct_promotion/entities/ct_promotion.entity";
import { Cungcap } from "src/modules/cungcap/entities/cungcap.entity";
import { Review } from "src/modules/review/entities/review.entity";
import { Trademarks } from "src/modules/trademarks/entities/trademarks.entity";
import { Winetype } from "src/modules/winetypes/entities/winetype.entity";
export declare class Wineline {
    MADONG: string;
    TENDONG: string;
    TRANGTHAI: string;
    HINHANH: string;
    MOTA: string;
    CHITIET: string;
    SOLUONGTON: number;
    winetype: Winetype;
    MATH: string;
    trademark: Trademarks;
    MANCC: string;
    ct_phieudats: CtPhieudat[];
    ct_phieunhaps: CtPhieunhap[];
    changeprices: Changeprice[];
    cungcaps: Cungcap[];
    ct_khuyenmais: CtPromotion[];
    ct_orders: CtOrder[];
    reviews: Review[];
}
