import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal',
  imports: [Header,Footer,TranslateModule],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
    constructor(private location: Location) { }
    historyBack(): void {
    this.location.back();
  }
}
