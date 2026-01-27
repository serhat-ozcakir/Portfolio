import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-legal',
  imports: [Header,Footer],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {

}
