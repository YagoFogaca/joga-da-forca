interface IForm {
  setDisabledInput: (value: React.SetStateAction<boolean>) => void;
  acerto: (correct: string) => void;
  disabledInput: boolean;
}

export function Form({ setDisabledInput, acerto, disabledInput }: IForm) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setDisabledInput(false);
        acerto(event.currentTarget.lyrics.value);
      }}
    >
      <input
        id="lyrics"
        name="lyrics"
        type="text"
        disabled={disabledInput}
        onChange={event => {
          if (event.currentTarget.value.length > 0) {
            setDisabledInput(true);
          }
        }}
      />
      <button type="submit">Bora lá</button>
    </form>
  );
}
