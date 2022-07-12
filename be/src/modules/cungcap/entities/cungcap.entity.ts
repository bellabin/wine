import { Provider } from "src/modules/provider/entities/provider.entity";
import { Wineline } from "src/modules/wineline/entities/wineline.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, Unique } from "typeorm";

@Entity('cungcap')
@Unique([ 'MADONG'])
export class Cungcap {

    @Column({type:'char', primary:true})
    MANCC!: string

    @ManyToOne(() => Provider, provider => provider.cungcaps)
    @JoinColumn({name:'MANCC'})
    provider: Provider


    @Column({type:'char'})
    MADONG!: string

    @ManyToOne(() => Wineline, wineline => wineline.cungcaps)
    @JoinColumn({name:'MADONG'})
    wineline: Wineline

    @Column({type:'float'})
    GIA!: number

    
}
