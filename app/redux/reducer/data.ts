import {ReduxState} from './../../interfaces/index';
import {createSlice} from '@reduxjs/toolkit';
import {DataRedux} from '../../interfaces';
import {data} from '@utils/dataTest';

const initialState: DataRedux = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    resetData(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {setData} = dataSlice.actions;

export const getData = (state: ReduxState) => state.data.data;

export default dataSlice.reducer;
