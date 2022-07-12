import { Phieudat } from "src/modules/phieudat/entities/phieudat.entity";
import { Role } from "src/modules/role/entities/role.entity";
export declare class Customer {
    MAKH: string;
    HO: string;
    TEN: string;
    GIOITINH: string;
    NGAYSINH: Date;
    DIACHI: string;
    SDT: string;
    EMAIL: string;
    USERNAME: string;
    PASSWORD: string;
    MANQ: string;
    role: Role;
    phieudats: Phieudat[];
}
