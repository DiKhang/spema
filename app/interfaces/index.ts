export interface DataIOMoney {
  id: number;
  date: string;
  type: 'income' | 'expense' | 'transfer' | 'receive' | string;
  amount: number;
  description: string;
  tag: string[];
  jar:
    | 'essential'
    | 'education'
    | 'saving'
    | 'enjoy'
    | 'investment'
    | 'charity'
    | string;
  at: string;
}

export interface Modal {
  name: string | null;
  props: object;
}

export interface Loading {
  show: boolean;
  props: object;
}

export interface Notify {
  show: boolean;
  props: {
    content: string;
    accept?: any;
    denied?: any;
  };
}
export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  _id: string;
  active: boolean;
  birthDay: string;
  activeAt: string;
  createdAt: string;
  name: string;
  gender: string;
  userID: string;
  username: string;
  jobName: string;
  role: string;
}

export interface JarHistory {
  id: string | null;
  type: 'income' | 'expense' | 'transfer' | 'receive' | null;
  date: string | null;
  updateAt: string | null;
  money: number | null;
  tag: string[] | null;
  description: string | null;
  from: string | null;
  to: string | null;
}
export interface Jar {
  name:
    | 'essential'
    | 'education'
    | 'saving'
    | 'enjoy'
    | 'investment'
    | 'charity'
    | null;
  history: JarHistory[] | null;
}
export interface DataRedux {
  data: any;
  token: Token;
  user: User | null;
}

export interface CommonRedux {
  data: any;
  common: any;
  dataIOMoney: DataIOMoney[] | null;
  modal: Modal;
  loading: Loading;
  notify: Notify;
  ratio: number[];
}

export interface ReduxState {
  data: DataRedux;
  common: CommonRedux;
}
