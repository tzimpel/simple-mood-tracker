import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonRange,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    NgIf,
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonDatetime,
    IonHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonRange,
    IonText,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  currentDateTime: string | null = null;
  currentMood = 5;
  isSaved = false;

  saveEntry(): void {
    const entry = {
      currentDateTime: this.currentDateTime,
      currentMood: this.currentMood,
    };

    this.handleSavedEntry(entry);
    this.resetForm();
    this.isSaved = true;
  }

  onFormChange(): void {
    this.isSaved = false;
  }

  private handleSavedEntry(_entry: { currentDateTime: string | null; currentMood: number }): void {
    // Placeholder for a future persistence or API integration.
  }

  private resetForm(): void {
    this.currentDateTime = null;
    this.currentMood = 5;
  }
}
