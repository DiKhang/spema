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

export interface DataRedux {
  data: any;
}

export interface CommonRedux {
  common: any;
  dataIOMoney: DataIOMoney[] | null;
}

export interface ReduxState {
  data: DataRedux;
  common: CommonRedux;
}
