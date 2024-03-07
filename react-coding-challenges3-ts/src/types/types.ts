export type TJobStory = {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
};

export type TTodo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};
