export interface Comment {
  user: string;
  name: string;
  brand: string;
  comment: string;
  date: string;
  star: string;
  id: number;
}
export interface AddComment {
  star: number;
  text: string;
}
