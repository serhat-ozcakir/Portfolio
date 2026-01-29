import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  gitHub(){
    window.open("https://github.com/serhat-ozcakir", "_blank");
  }
  
  elPolo(){
    window.open("https://oezcakir-serhat.developerakademie.net/El%20Pollo%20Locco/index.html", "_blank");
  }

  pokedex(){
    window.open("https://oezcakir-serhat.developerakademie.net/Pokedex/index.html", "_blank");
  }
}
