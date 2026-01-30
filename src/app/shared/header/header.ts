import { Component, Output, EventEmitter, HostListener,  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private translate: TranslateService){

  }
  @Output() menuToggle = new EventEmitter<boolean>(); // 🔹 dışarı sinyal göndereceğiz
  isOpen:boolean = false;

  toggleMenu(){
    this.isOpen = !this.isOpen
    this.menuToggle.emit(this.isOpen)  // 🔹 Home’a true/false gönder
  }

closeMenu(){
  this.isOpen = false;
  this.menuToggle.emit(false);
  document.getElementById('navbarNav')?.classList.remove('show');
}

useLanguage(lang: string){
  this.translate.use(lang);
  localStorage.setItem('lang', lang);
}


  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 991 && this.isOpen) {
      this.closeMenu();
    }
  }
}
