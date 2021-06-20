import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class Organization {

    @PrimaryGeneratedColumn("uuid")
    uuid: number;

    @Column()
    name: string;

    @Column({nullable: true})
    originalCode?: string;

    @Column({nullable: true})
    tradeName?: string;

    @Column({nullable: true})
    document?: string;

    @Column({nullable: true})
    phone?: string;

    @Column({nullable: true})
    type?: string;

}
