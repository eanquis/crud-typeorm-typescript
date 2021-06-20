import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Specie {

    @PrimaryGeneratedColumn("uuid")
    uuid: number;

    @Column()
    name: string;

    static createFromJson(data){
        let specie = new Specie()
        specie.uuid = data['uuid']
        specie.name = data['name']
        return specie
    }

}
