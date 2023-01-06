import { useEffect, useState } from 'react';
import { FieldInfos } from '../../components/field-infos/index.fieldInfos';
import { Form } from '../../components/form/index.form';
import { Game } from '../../components/game/index.game';
import { Lyrics } from '../../components/lyrics-section/index.lyrics';
import { IWords } from '../../utils/interfaces/mocks';
import { wordGenerator } from '../../utils/word-generator/wordGenerator';
import './game.style.css';

export function PageGame() {
  const word = 'hipopótamo';
  const wordArray = word.split('');
  const [wordTeste, setWordTeste] = useState<IWords>({ topic: '', word: '' });

  const [disabledInput, setDisabledInput] = useState(false);
  const [wordCopy, setWordCopy] = useState<number[]>(
    new Array(wordArray.length).fill(0),
  );

  function Acerto(correct: string) {
    const wordCopyT: number[] = wordCopy;
    wordArray.map((lyrics, index) => {
      if (lyrics === correct) {
        wordCopyT[index] = 1;
        setWordCopy(wordCopyT);
      }
    });
  }

  function startGame() {
    const word = wordGenerator();
    console.log(word);
    setWordTeste(word);
  }

  useEffect(() => {
    startGame();
  }, []);

  return (
    <section id="section-game">
      <Game />
    </section>
  );
}
