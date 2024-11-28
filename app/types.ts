// Representerar ett monster
export type Monster = {
  id: number;
  name: string;
  color: string;
  eyes: number;
};

// Representerar en kommentar kopplad till ett inlägg
export type Comment = {
  id: number;
  text: string;
  authorId: number; // Monster som skrev kommentaren
};

// Representerar ett inlägg
export type Post = {
  id: number;
  title: string;
  text: string;
  authorId: number; // Monster som skrev inlägget
  comments: Comment[];
  likes: number;
};

// En typ för hela API:ets data
export type APIResponse = {
  monsters: Monster[];
  posts: Post[];
};

export type PostRouteParams = {
  id: number; // ID för inlägget
};

export type RootStackParamList = {
  Feed: undefined; // Feed har inga parametrar
  Post: { id: number }; // Post tar emot id som parameter
};
