import {
  getRepository,
} from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Breed, Specie } from "../entity/index";

export class Controller {
  entity: any;
  nameEntity: string;
  repository: any;

  constructor(entity: any, nameEntity: string){
      this.entity = entity;
      this.nameEntity = nameEntity
      this.repository = getRepository(entity);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return await this.repository.createQueryBuilder(this.nameEntity)
    .paginate()
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.repository.findOne(request.params.uuid);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    delete request.body.uuid;
    return this.repository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    let entity = this.entity.createFromJson(request.body);
    try {
        return await this.repository.save(entity);
    } catch (error) {
        return new Error(error)
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let entity = await this.repository.findOne(request.params.uuid);
    await this.repository.remove(entity);
  }
}
