export interface userContext {
  displayName: string;
  uid: string;
}

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

export type comments = {
  id: number;
  user: string;
  text: string;
  createAt: number;
  uid: string;
}

export interface listComments {
  id: number;
  user: string;
  text: string;
  createAt: number;
  uid: string;
}

export interface homeProps {
  list: {
    id: number;
    title: string;
    page: string;
    text: string;
    editing: boolean;
  };
  editChange: (id: number, editing: boolean) => void;
}

export interface listProps {
  list: {
    id: number;
    title: string;
    page: string;
    text: string;
    editing: boolean;
    createAt: number;
    image: string;
  };
  editChange: (id: number, editing: boolean) => void;
}

export type required = {
  name: string;
  email: string;
  password: string;
};

export interface commentProps {
  list: {
    id: number;
  };
}

export interface bookList {
  id: string;
  volumeInfo: {
    title: string,
    authors: string,
    publishedDate: string,
  }
}