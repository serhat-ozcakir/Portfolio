import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-privacy',
  imports: [Header, Footer],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {

}
