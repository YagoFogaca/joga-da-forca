import { useState } from 'react';
import { Game } from '../../components/game/index.game';
import { IWords } from '../../utils/interfaces/mocks';
import { wordGenerator } from '../../utils/word-generator/wordGenerator';
import './game.style.css';

export function PageGame() {
  const [move, setWordTeste] = useState<IWords>({ topic: '', word: '' });

  const [gameStart, setGameStart] = useState<boolean>(false);

  function startGame() {
    const word = wordGenerator();
    setWordTeste(word);
  }

  return (
    <section id="section-game">
      {gameStart ? (
        <Game topic={move.topic} word={move.word} />
      ) : (
        <button
          onClick={() => {
            startGame();
            setGameStart(true);
          }}
        >
          Começar
        </button>
      )}
    </section>
  );
}
