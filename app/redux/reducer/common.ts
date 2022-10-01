import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommonRedux, ReduxState} from './../../interfaces/index';

const initialState: CommonRedux = {
  common: {
    error: null,
    success: null,
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    commonSuccess(state, action: PayloadAction<any>) {
      state.common.success = action.payload;
    },
    resetCommon(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {commonSuccess} = commonSlice.actions;

export const getCommonSuccess = (state: ReduxState) => state.common.common;

export default commonSlice.reducer;
