import {createQueryBuilder, getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Breed, Specie} from "../entity/index";
import {pagination} from 'typeorm-pagination'


export class BreedController {

    private breedRepository = getRepository(Breed);

    async all(request: Request, response: Response, next: NextFunction) {

        return await this.breedRepository.createQueryBuilder('breed')
        .leftJoinAndSelect('breed.typeSpecie', 'specie')
        .orderBy("breed.uuid", "ASC")
        .paginate()
    }

    async one(request: Request, response: Response, next: NextFunction) {

        return  await this.breedRepository.createQueryBuilder("breed")
        .leftJoinAndSelect('breed.typeSpecie', 'specie')
        .where("breed.uuid = '"+request.params.uuid+"' ")
        .paginate()
            
    }

    async save(request: Request, response: Response, next: NextFunction) {
        delete request.body.uuid;
        return this.breedRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        return this.breedRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let breedToRemove = await this.breedRepository.findOne(request.params.id);
        await this.breedRepository.remove(breedToRemove);
    }

}