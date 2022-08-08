import { CtPhieutra } from "src/modules/ct_phieutra/entities/ct_phieutra.entity";
import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
export declare class CtPhieudat {
    IDCTPD: number;
    MAPD: string;
    phieudat: Phieudat;
    MADONG: string;
    wineline: Wineline;
    SOLUONG: number;
    GIA: number;
    ct_phieutras: CtPhieutra[];
}
