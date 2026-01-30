import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  activeLang: 'de' | 'en' = 'en';
  constructor(private translate: TranslateService){}

  ngOnInit():void{
    const lang = localStorage.getItem('lang');

    if(lang === 'de' || lang === 'en'){
      this.activeLang = lang
    } else{
      this.activeLang = 'en'
    }
     this.translate.use(this.activeLang); 
  }

  @Output() menuToggle = new EventEmitter<boolean>(); 
  isOpen:boolean = false;

  toggleMenu(){
    this.isOpen = !this.isOpen
    this.menuToggle.emit(this.isOpen)  
  }

closeMenu(){
  this.isOpen = false;
  this.menuToggle.emit(false);
  document.getElementById('navbarNav')?.classList.remove('show');
}

useLanguage(lang: 'de' | 'en'){
  this.translate.use(lang);
  this.activeLang = lang
  localStorage.setItem('lang', lang);
}




  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 991 && this.isOpen) {
      this.closeMenu();
    }
  }
}
