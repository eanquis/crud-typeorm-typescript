import { Contact} from "../entity/index";
import { Controller } from './index';
import { NextFunction, Request, Response } from "express";


export class ContactController extends Controller{

    constructor(){
        super(Contact, "contact")
    }

}