import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  dcHeroes:string[] = ["Batman", "Superman", "Wonder Woman", "Flash"];
  index:number = 0;
  toggleHeroFlag:boolean = true;
  selectedHero:string;
  myStyle:{};
  color:string;
  styleToggleFlag:boolean=true;
  currentCSSClass:string = "styleRed";
  inputColor:string = "red";

  setCSSClass() {
    if (this.currentCSSClass == "styleRed") {
      this.currentCSSClass = "styleWhite";
    } else {
      this.currentCSSClass = "styleRed";
    }
    console.log(this.currentCSSClass);
  }

  setStyle() {
    this.myStyle = {
      "font-weight": this.styleToggleFlag ? "bold" : "normal",
      "font-size": this.styleToggleFlag ? "24px" : "15px",
      "color": this.generateRandomColor()
    }

    this.styleToggleFlag = !this.styleToggleFlag;
  }

  generateRandomColor() {
    // #ffffff
    this.color = "#";
    var letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    for (var i = 0 ; i < 6 ; i++) {
      this.color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(this.color);
    return this.color;
  }

  selectHero(hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

  toggleHero() {
    this.toggleHeroFlag = !this.toggleHeroFlag;
  }

  constructor() { }

  ngOnInit() {
  }

}
