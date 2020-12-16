import { Component } from '@angular/core';

@Component({
    selector: "app-first",
    templateUrl: "first.component.html",
    styleUrls: ["first.component.css"]
})
export class FirstComponent {
    headingTwo:string = "My First Component!!";
    imageUrl:string = "../../assets/think.png";

    changeValue() {
        this.headingTwo = 'this values has been chaged';
    }

    returnString() {
        return "String returned";
    }
}