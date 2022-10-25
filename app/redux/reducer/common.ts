import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {data} from '@utils/dataTest';
import {CommonRedux, DataIOMoney, ReduxState} from './../../interfaces/index';

const initialState: CommonRedux = {
  common: {
    error: null,
    success: null,
  },
  dataIOMoney: data,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    commonSuccess(state, action: PayloadAction<any>) {
      state.common.success = action.payload;
    },
    addDataIOMoney(state, action: PayloadAction<DataIOMoney>) {
      state.dataIOMoney?.push(action.payload);
    },
    resetCommon(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {commonSuccess, addDataIOMoney} = commonSlice.actions;

export const getCommonSuccess = (state: ReduxState) => state.common.common;
export const getDataIOMoney = (state: ReduxState) => state.common.dataIOMoney;

export default commonSlice.reducer;
