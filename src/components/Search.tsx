import React, { useState } from "react";

import { State } from "../utils/dto";

type FormEvent = React.FormEvent<HTMLFormElement>;

type Props = {
  state: State;
  setState: (arg: State) => void;
  handleOnSubmit: (e: FormEvent) => void;
};

const Search: React.FC<Props> = ({ state, setState, handleOnSubmit }) => {
  return (
    <form className="mt-5" onSubmit={(e) => handleOnSubmit(e)}>
      <div className="field">
        <label className="label">Search video</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text something"
            value={state.search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, search: e.target.value })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
