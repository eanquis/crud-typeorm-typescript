import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  uuid: number;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  number: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postCode: string;

  @Column()
  country: string;

  static createFromJson(data) {
    let address = new Address();
    address.uuid = data["uuid"];
    address.street = data["street"];
    address.complement = data["complement"];
    address.number = data["number"];
    address.neighborhood = data["neighborhood"];
    address.city = data["city"];
    address.state = data["state"];
    address.postCode = data["postCode"];
    address.country = data["country"];
    return address;
  }
}
