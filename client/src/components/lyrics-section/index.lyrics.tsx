import './lyrics.style.css';

type PropsParams = {
  lyrics?: string;
};

export function Lyrics({ lyrics }: PropsParams) {
  return (
    <div className="section-lyrics">
      <p className="lyrics">{lyrics}</p>
    </div>
  );
}
