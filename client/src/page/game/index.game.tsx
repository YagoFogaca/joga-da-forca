import './game.style.css';

export function PageGame() {
  return (
    <section id="section-game">
      <div className="field-infos">
        <h3 id="title-name">Yago</h3>
        <span id="trophies">35</span>
      </div>

      <div className="field-game">
        <div className="field-tema">
          <h2 id="title-tema">Animal</h2>
        </div>
      </div>
    </section>
  );
}
