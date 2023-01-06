import { useEffect, useState } from 'react';
import { IWords } from '../../utils/interfaces/mocks';
import { FieldInfos } from '../field-infos/index.fieldInfos';
import { Form } from '../form/index.form';
import { Lyrics } from '../lyrics-section/index.lyrics';
import './game.style.css';

export function Game({ topic, word }: IWords) {
  const wordArray = word.split('');

  const [disabledInput, setDisabledInput] = useState(false);
  const [wordCopy, setWordCopy] = useState<number[]>(
    new Array(wordArray.length).fill(0),
  );

  function Acerto(correct: string) {
    const wordCopyArray: number[] = wordCopy;
    wordArray.map((lyrics, index) => {
      if (lyrics === correct) {
        wordCopyArray[index] = 1;
        setWordCopy(wordCopyArray);
      }
    });
  }

  return (
    <>
      <FieldInfos />

      <div className="field-game">
        <div className="field-tema">
          <h2 id="title-tema">{topic}</h2>
        </div>

        <div id="game">
          <div id="field-lyrics">
            {wordCopy.map((value, index) => {
              if (value === 1) {
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
