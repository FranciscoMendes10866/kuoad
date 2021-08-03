interface Large {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface Medium {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface Small {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface Tiny {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface Videos {
  large: Large;
  medium: Medium;
  small: Small;
  tiny: Tiny;
}

interface List {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  duration: number;
  picture_id: string;
  videos: Videos;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export type PixabayRes = {
  total: number;
  totalHits: number;
  hits: List[];
};

export type VideoSelected = {
  username: string;
  avatar: string;
  views: null | number;
  url: string;
};

export type State = {
  videoSelected: VideoSelected;
  search: string;
  list: List[];
};
