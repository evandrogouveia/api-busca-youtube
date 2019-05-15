import { Component } from '@angular/core';
import { VideoDetail } from './youtube/video-deatils.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: VideoDetail[];
  loading: boolean;
  message = '';
 
  updateResults(results: VideoDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Não encontrado...';
    } else {
      this.message = 'Resultado Top 10:';
    }
  }
}