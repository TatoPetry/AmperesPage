import { Id } from 'src/app/core/interfaces/id';

export interface Video extends Id {
  title: string;
  url: string;
}
