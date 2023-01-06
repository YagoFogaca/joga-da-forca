import { useEffect, useState } from 'react';
import { IWords } from '../../utils/interfaces/mocks';
import { wordGenerator } from '../../utils/word-generator/wordGenerator';
import { FieldInfos } from '../field-infos/index.fieldInfos';
import { Form } from '../form/index.form';
import { Lyrics } from '../lyrics-section/index.lyrics';
import './game.style.css';

export function Game() {
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
    <>
      <FieldInfos />

      <div className="field-game">
        <div className="field-tema">
          <h2 id="title-tema">{wordTeste.topic}</h2>
        </div>

        <div id="game">
          <div id="field-lyrics">
            {wordCopy.map((indice, index) => {
              if (indice === 1) {
                return <Lyrics lyrics={wordArray[index]} key={index} />;
              } else {
                return <Lyrics key={index} />;
              }
            })}
          </div>
          <Form
            acerto={Acerto}
            disabledInput={disabledInput}
            setDisabledInput={setDisabledInput}
          />
        </div>
      </div>
    </>
  );
}
