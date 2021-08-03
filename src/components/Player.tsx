import React from "react";

type Props = {
  video: string;
};

const Player: React.FC<Props> = ({ video }) => {
  return <video src={video} controls />;
};

export default Player;
