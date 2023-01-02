import { useState } from 'react';
import { PageGame } from './page/game/index.game';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <PageGame />
    </main>
  );
}

export default App;
