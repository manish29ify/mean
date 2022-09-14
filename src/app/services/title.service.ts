import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class TitleService {
    titleSubject = new Subject<string>()

    changeTitle(msg: string) {
        this.titleSubject.next(msg)
    }
}