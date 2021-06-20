import {Specie} from "../entity/index";
import { Controller } from './index';

export class SpecieController extends Controller{

    constructor(){
        super(Specie, "specie")
    }

}