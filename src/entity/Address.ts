import {
  Column
} from "typeorm";

export class Address {

  @Column({nullable: true})
  street: string;

  @Column({nullable: true})
  complement: string;

  @Column({nullable: true})
  number: string;

  @Column({nullable: true})
  neighborhood: string;

  @Column({nullable: true})
  city: string;

  @Column({nullable: true})
  state: string;

  @Column({nullable: true})
  postCode: string;

  @Column({nullable: true})
  country: string;

  static createFromJson(data) {
    let address = new Address();
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
