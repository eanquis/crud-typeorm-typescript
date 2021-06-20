import {Organization} from "../entity/index";
import { Controller } from './index';

export class OrganizationController extends Controller{

    constructor(){
        super(Organization, "organization")
    }

}