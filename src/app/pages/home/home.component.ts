import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayImages = ['dog.jpg', 'holybible.jpg', 'mountain8.jpg'];
  jsonImages = [
    {
      title: 'Chien',
      url: 'dog.jpg',
      author: 'Pierre'
    },
    {
      title: 'Bible',
      url: 'holybible.jpg',
      author: 'Jack'
    },
    {
      title: 'Montagne',
      url: 'mountain8.jpg',
      author: 'Daniel'
    }];


  randomIndex = Math.floor(Math.random()*this.arrayImages.length);
  sourceImage = this.arrayImages[this.randomIndex];

  console(str:string) {
    console.log(str)
  }

changeRandom() {
  this.randomIndex = Math.floor(Math.random() * this.arrayImages.length);
  this.console('randomIndex' + this.randomIndex);
}

valColor = 'red';

textPrimary = false;
displayParag = true;
displaySwitch = 1;

incSwitch(){
  this.displaySwitch++;
  this.displaySwitch = this.displaySwitch> 3 ? 1 : this.displaySwitch;
  // If (this.this.displaySwitch>3) { this.displaySwitch = 1 } else { this.dispaySwitch = this.displaySwitch }
}

  constructor() { }

  ngOnInit(): void {
    console.log('randomIndex:',this.randomIndex);
    console.log('sourceImage:',this.sourceImage);
    console.log('jsonImagesRandomTitle',this.jsonImages[this.randomIndex].title);
  }

}