export interface IArticle {
  id: number;
  createdAt: string;
  title: string;
  category: string;
  image: string;
  content: string;
  url: string;
}

export interface ISubscription {
  [key: string]: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
}

export interface IField {
  key: string;
  placeholder: string;
  tag: string;
  type: string;
}

export interface IKeyValue {
  key: string;
  value: string;
}
