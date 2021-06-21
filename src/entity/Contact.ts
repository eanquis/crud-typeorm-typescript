import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Address } from "./index";

@Entity()
export class Contact {

    @PrimaryGeneratedColumn("uuid")
    uuid: number;

    @Column()
    name: string;

    @Column({nullable: true})
    cpf: string;
    
    @Column({nullable: true})
    crmv: string;

    @Column({nullable: true})
    whatsAppPhone: string;

    @Column({nullable: true})
    optin: boolean;

    @Column({nullable: true})
    phone: string;

    @Column(type => Address)
    address: Address;

    static createFromJson(data){
        let contact = new Contact()
        contact.uuid = data['uuid']
        contact.name = data['name']
        contact.cpf = data['cpf']
        contact.crmv = data['crmv']
        contact.whatsAppPhone = data['whatsAppPhone']
        contact.optin = data['optin']
        contact.phone = data['phone']
        contact.address = data['address']
        return contact
    }

}
