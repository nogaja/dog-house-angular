import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Item } from "../models/item";
import { ItemService } from "./item.service";


@Injectable({
    providedIn:'root'
})

export class ItemResolverService implements Resolve<Observable<Item>>{
    constructor(private itemService: ItemService){}

    resolve(route :ActivatedRouteSnapshot){
        const{id}= route.params
        return this.itemService.getById(id)
    }
}