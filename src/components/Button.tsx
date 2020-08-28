import * as React from "react";
import { useState } from "react";

interface Props {
  text: string;
  disabled: boolean;
}

export const Button = (props: Props): JSX.Element => {
  const [state, toggle] = useState(true);
  return (
    <button className="button submit-button" onClick={(): void => toggle(!state)} disabled={props.disabled}>
      {props.text}
    </button>
  );
};
