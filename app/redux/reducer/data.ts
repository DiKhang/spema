import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataRedux, ReduxState, User, Token} from '../../interfaces';

const initialState: DataRedux = {
  data: null,
  token: {
    accessToken: '',
    refreshToken: '',
  },
  user: {
    _id: '',
    active: false,
    birthDay: '',
    activeAt: '',
    createdAt: '',
    name: '',
    gender: '',
    userID: '',
    username: '',
    jobName: '',
    role: '',
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setToken(state, action: PayloadAction<Token>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    resetData(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {setData, setToken, setUser} = dataSlice.actions;

export const getData = (state: ReduxState) => state.data.data;
export const getToken = (state: ReduxState) => state.data.token;
export const getUser = (state: ReduxState) => state.data.user;

export default dataSlice.reducer;
