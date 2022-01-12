export type Image = {
  png: string;
  webp: string;
};

export type User = {
  image: Image;
  username: string;
};

export type Replies = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
};

export type CommentArray = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Replies[];
};

export type Comments = {
  currentUser: User;
  comments: CommentArray[];
};
