export interface Text {
  user: string;
  title: string;
  text: string;
  page: string;
  uid: string;
  editing: boolean;
  id: number;
  createAt: number;
  count: number;
  image: string;
  total: number;
}

export interface COMMENT {
  id: number;
  user: string;
  text: string;
  createAt: number;
  uid: string;
}
