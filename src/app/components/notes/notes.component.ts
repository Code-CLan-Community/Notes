import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: { id: number; title: string; content: string }[] = [];
  title = '';
  content = '';
  isEditing = false;
  editNoteId: number | null = null;

  addNote() {
    if (this.title && this.content && !this.isEditing) {
      this.notes.push({
        id: Date.now(),
        title: this.title,
        content: this.content
      });
      this.resetForm();
    } else if (this.isEditing && this.editNoteId !== null) {
      this.notes = this.notes.map(note =>
        note.id === this.editNoteId
          ? { ...note, title: this.title, content: this.content }
          : note
      );
      this.resetForm();
    }
  }

  editNote(noteId: number) {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      this.title = note.title;
      this.content = note.content;
      this.editNoteId = note.id;
      this.isEditing = true;
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    if (this.editNoteId === id) this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.content = '';
    this.isEditing = false;
    this.editNoteId = null;
  }
}
