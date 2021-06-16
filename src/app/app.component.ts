import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriété title qui ressemble beaucoup à une varible
  title = 'This is my Title from TypeScript';

  nb = 0;

  // méthode alert() qui ressemble à une fonction
  alert() {
  // on peut déclarer des constantes et des variables
  // dans les méthodes
    const message = "This is a message";
  // on peut utiliser tous les outils de javascript dans les
  // méthodes 
    console.log(message);

    this.nb++;

    console.log('You\'ve clicked:',this.nb + ' times')

    alert(message);
  }
}
