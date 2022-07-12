import { CreateCungcapDto } from './dto/create-cungcap.dto';
import { UpdateCungcapDto } from './dto/update-cungcap.dto';
import { Cungcap } from './entities/cungcap.entity';
export declare class CungcapService {
    private cungcapRepo;
    create(payload: CreateCungcapDto): Promise<[import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader"), import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket")[]]>;
    findAll(): Promise<Cungcap[]>;
    findOne(MANCC: string, MADONG: string): Promise<Cungcap>;
    update(MANCC: string, MADONG: string, body: UpdateCungcapDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
