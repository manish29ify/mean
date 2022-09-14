import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from "../models/product.model";

@Injectable({
    providedIn: "root"
})

export class ProductService {
    constructor(private http: HttpClient) { }


    getProduct(): Observable<Products> {
        return this.http.get<Products>("/products")
    }
    addProduct(payload: any) {
        return this.http.post("/products", payload)
    }

    updateProduct(payload: any) {
        return this.http.put("/products", payload)
    }

    deleteProduct(id: string) {
        return this.http.delete("/products/" + id)
    }

}