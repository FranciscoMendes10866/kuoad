import React from "react";

import { VideoSelected } from "../utils/dto";

type Props = {
  videoSelected: VideoSelected;
};

const VideoDetail: React.FC<Props> = ({ videoSelected }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              className="is-rounded"
              src={videoSelected.avatar}
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{videoSelected.username}</strong>{" "}
              <small>@johnsmith</small> <small>{videoSelected.views}</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default VideoDetail;
