import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Specie } from "./Specie";

@Entity()
export class Breed {

    @PrimaryGeneratedColumn("uuid")
    uuid: number;

    @Column()
    name: string;

    @ManyToOne(type => Specie)
    @JoinColumn({ referencedColumnName: "uuid"})
    typeSpecie: Specie;

    static createFromJson(data){
        let breed = new Breed()
        breed.uuid = data['uuid']
        breed.name = data['name']
        breed.typeSpecie = data['typeSpecie']
        return breed
    }

}
