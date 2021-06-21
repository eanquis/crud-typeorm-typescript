import { Address } from "../entity/index";
import { Controller } from './index';

export class AddressController extends Controller{

    constructor(){
        super(Address, "address")
    }

}