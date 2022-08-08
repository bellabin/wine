import { CtPhieudat } from "src/modules/ct_phieudat/entities/ct_phieudat.entity";
import { Phieutra } from "src/modules/phieutra/entities/phieutra.entity";
export declare class CtPhieutra {
    MAPT: string;
    phieutra: Phieutra;
    IDCTPD: number;
    ct_phieudat: CtPhieudat;
    SOLUONG: number;
}
