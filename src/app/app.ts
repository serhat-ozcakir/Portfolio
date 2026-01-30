import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('project-portfolio');
  private translate = inject(TranslateService);
  
  ngOnInit(): void {
    const saveLanguage = localStorage.getItem('lang') || 'en';
    this.translate.use(saveLanguage)
  }
  useLanguage(language: string): void {
      this.translate.use(language);
  }

}
