import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';
import { HomePage } from './pages/Home/home.component';
import { LayoutWrapper } from './pages/Layout~/layout';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NoteListComponent,
    HomePage,
    LayoutWrapper
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'note-management';
}
