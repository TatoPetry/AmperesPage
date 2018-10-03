import { Id } from './id';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface Show extends Id {
  title?: string;
  description?: string;
  date?: Date;
  link?: SafeResourceUrl;
}
