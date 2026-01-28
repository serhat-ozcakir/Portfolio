import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Friends } from './sections/friends/friends';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { Work } from './sections/work/work';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,About,Contact,Friends,Hero,Skills,Work],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isHeroHidden:boolean = false;
   
onMenuToggle(isOpen: boolean){
    this.isHeroHidden = isOpen;
  }

}
