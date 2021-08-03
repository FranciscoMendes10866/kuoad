import React from "react";

import { State } from "../utils/dto";

type Props = {
  state: State;
  setState: (arg: State) => void;
};

const VideoList: React.FC<Props> = ({ state, setState }) => {
  return (
    <>
      {state.list.map((el) => (
        <div
          key={el.id}
          style={{ cursor: "pointer" }}
          className={`box ${
            state.videoSelected.url === el.videos.large.url
              ? "has-background-dark has-text-white"
              : "has-background-white has-text-black"
          }`}
          onClick={() =>
            setState({
              ...state,
              videoSelected: {
                url: el.videos.large.url,
                avatar: el.userImageURL,
                username: el.user,
                views: el.views,
              },
            })
          }
        >
          {el.user}
        </div>
      ))}
    </>
  );
};

export default VideoList;
