export interface DataRedux {
  data: any;
}

export interface CommonRedux {
  common: any;
}

export interface ReduxState {
  data: DataRedux;
  common: CommonRedux;
}
