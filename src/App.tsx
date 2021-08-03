import React, { useState } from "react";

import { VideoList, VideoDetail, Search, Player } from "./components";
import pixabay from "./api/pixabay";
import { State } from "./utils/dto";

type FormEvent = React.FormEvent<HTMLFormElement>;

const App: React.FC = () => {
  const [state, setState] = useState<State>({
    videoSelected: {
      avatar: "",
      url: "",
      username: "",
      views: null,
    },
    search: "",
    list: [],
  });
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await pixabay.get("videos", {
        params: { q: state.search },
      });
      setState({ ...state, list: data.hits });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container">
      <Search
        state={state}
        setState={setState}
        handleOnSubmit={handleOnSubmit}
      />
      <div className="columns mt-5">
        <div className="column is-9">
          <Player video={state.videoSelected.url} />
          <VideoDetail videoSelected={state.videoSelected} />
        </div>
        <div className="column is-3">
          <VideoList state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
};

export default App;
