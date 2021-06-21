import { Address } from "cluster";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity()
export class Contact {

    @PrimaryGeneratedColumn("uuid")
    uuid: number;

    @Column()
    name: string;

    @Column()
    cpf: string;
    
    @Column()
    crmv: string;

    @Column()
    whatsAppPhone: string;

    @Column()
    optin: boolean;

    @Column()
    phone: string;

    static createFromJson(data){
        let contact = new Contact()
        contact.uuid = data['uuid']
        contact.name = data['name']
        contact.cpf = data['cpf']
        contact.crmv = data['crmv']
        contact.whatsAppPhone = data['whatsAppPhone']
        contact.optin = data['optin']
        contact.phone = data['phone']
        return contact
    }

}
