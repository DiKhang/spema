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

export interface DataRedux {
  data: any;
}

export interface CommonRedux {
  common: any;
  dataIOMoney: DataIOMoney[] | null;
  modal: Modal;
  loading: Loading;
  notify: Notify;
}

export interface ReduxState {
  data: DataRedux;
  common: CommonRedux;
}
