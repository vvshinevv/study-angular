import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GotcharacterComponent implements OnInit {

  GOTCharacter:string[];
  GOTCharacterFirstName:string[] = ["John", "Arya", "Cersei", "Deamon"];
  GOTCharacterLastName:string[] = ["Snow", "Stark", "Lannister", "Peace"];
  i = 0;
  stopSwitch:any;
  stopSwitchStatus = true;
  twoWayData = 'Try somethings';

  @Input() imageUrlChild:string;

  switchFirstAndLastName() {
    console.log("click!!");
    this.stopSwitch = setInterval(() => {
      if (this.i % 2 == 0) {
        this.GOTCharacter = this.GOTCharacterFirstName;  
        console.log("if");
      } else {
        this.GOTCharacter = this.GOTCharacterLastName; 
        console.log("else")
      }
      this.i++;
    }, 3000);
    this.stopSwitchStatus = false;
  }

  stopSwitchFirstAndLastName() {
    console.log("stop!!");
    clearInterval(this.stopSwitch);
    this.stopSwitchStatus = true;
  }

  constructor() { 
    this.GOTCharacter = this.GOTCharacterFirstName;  
  }

  ngOnInit() {
    console.log(this.imageUrlChild);
  }
}
