import { Component, signal } from '@angular/core';
import { BlogComponent } from "./components/blog/blog";

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema-blogging');
}
