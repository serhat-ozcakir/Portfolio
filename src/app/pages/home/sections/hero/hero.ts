import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private translate = inject(TranslateService);

  line1:string[] = [];
  line2:string[] = [];

 ngOnInit(){
  this.setTitleLetters();
  this.translate.onLangChange.subscribe(() => {
      this.setTitleLetters();
    });
 } 

setTitleLetters() {
  this.line1 = this.translate.instant('HERO.TITLE_1').split('');
  this.line2 = this.translate.instant('HERO.TITLE_2').split('');
}
}
