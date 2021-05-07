import { ReactElement, useState } from "react";

interface Props {
  text: string;
  disabled: boolean;
}

export const Button = (props: Props): ReactElement => {
  const [state, toggle] = useState<boolean>(true);
  return (
    <button className="button submit-button" onClick={(): void => toggle(!state)} disabled={props.disabled}>
      {props.text}
    </button>
  );
};
