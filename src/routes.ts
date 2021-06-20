import { BreedController, SpecieController, OrganizationController } from "./controller/index";

export const Routes = [


{
    method: "get",
    route: "/organizations",
    controller: OrganizationController,
    action: "all"
}, {
    method: "get",
    route: "/organizations/:uuid",
    controller: OrganizationController,
    action: "one"
}, {
    method: "post",
    route: "/organizations",
    controller: OrganizationController,
    action: "save"
}, {
    method: "delete",
    route: "/organizations/:uuid",
    controller: OrganizationController,
    action: "remove"
},

//Breed routes
{
    method: "post",
    route: "/breeds",
    controller: BreedController,
    action: "save"
},
{
    method: "get",
    route: "/breeds",
    controller: BreedController,
    action: "all"
},
{
    method: "get",
    route: "/breeds/:uuid",
    controller: BreedController,
    action: "one"
},
{
    method: "put",
    route: "/breeds",
    controller: BreedController,
    action: "update"
},

//Species routes
{
    method: "post",
    route: "/species",
    controller: SpecieController,
    action: "save"
},
{
    method: "put",
    route: "/species",
    controller: SpecieController,
    action: "update"
},
{
    method: "get",
    route: "/species",
    controller: SpecieController,
    action: "all"
},
{
    method: "get",
    route: "/species/:uuid",
    controller: SpecieController,
    action: "one"
}

];