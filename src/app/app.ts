import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-portfolio');
  
  private translate = inject(TranslateService);
  useLanguage(language: string): void {
      this.translate.use(language);
  }

}
