import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  imports: [TranslateModule],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {

  elPolo(){
    window.open("https://serhat-oezcakir.de/El-Pollo-Locco/", "_blank");
  }
  gitHubElPollo(){
    window.open("https://github.com/serhat-ozcakir/El-Pollo-Locco.git", "_blank");
  }

  pokedex(){
    window.open("https://serhat-oezcakir.de/Pokedex/", "_blank");
  }
  gitHubPokedex(){
     window.open("https://github.com/serhat-ozcakir/Pokemon.git", "_blank");
  }
  join(){
    window.open("https://serhat-oezcakir.de/join/", "_blank");
  }
  gitHubJoin(){
    window.open("https://github.com/serhat-ozcakir/Join.git", "_blank");
  }
}
