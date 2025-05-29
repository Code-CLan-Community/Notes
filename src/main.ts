import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { WelcomeComponent } from './app/components/welcome/welcome.component';
import { NotesComponent } from './app/components/notes/notes.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'notes', component: NotesComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
