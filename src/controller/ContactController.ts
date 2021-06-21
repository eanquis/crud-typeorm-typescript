import { Contact} from "../entity/index";
import { Controller } from './index';

export class ContactController extends Controller{

    constructor(){
        super(Contact, "contact")
    }

}