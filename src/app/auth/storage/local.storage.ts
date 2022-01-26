import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStorage {

    storeInLocalDB(key: string, value: string) {
        return localStorage.setItem(key, JSON.stringify(value))
    }
    getFromLocalDB(key: string) {
        return localStorage.getItem(key);
    }
}