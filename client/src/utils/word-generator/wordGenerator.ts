import { words } from '../../mocks/words';
import { IWords } from '../interfaces/mocks';

export function wordGenerator(): IWords {
  const numberGenerator =
    Math.floor(Math.random() * (words.length - 0 + 1)) + 0;
  return words[numberGenerator];
}
