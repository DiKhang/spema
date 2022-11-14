import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {data} from '@utils/dataTest';
import {
  CommonRedux,
  DataIOMoney,
  Loading,
  Modal,
  Notify,
  ReduxState,
} from './../../interfaces/index';

const initialState: CommonRedux = {
  common: {
    error: null,
    success: null,
  },
  dataIOMoney: data,
  modal: {
    name: null,
    props: {},
  },
  loading: {
    show: false,
    props: {},
  },
  notify: {
    show: false,
    props: {
      content: '',
      accept: null,
      denied: null,
    },
  },
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
    setModal(state, action: PayloadAction<Modal>) {
      state.modal = action.payload;
    },
    setNotify(state, action: PayloadAction<Notify>) {
      state.notify = action.payload;
    },
    setLoading(state, action: PayloadAction<Loading>) {
      state.loading = action.payload;
    },
    resetCommon(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {commonSuccess, addDataIOMoney, setLoading, setModal, setNotify} =
  commonSlice.actions;

export const getCommonSuccess = (state: ReduxState) => state.common.common;
export const getDataIOMoney = (state: ReduxState) => state.common.dataIOMoney;
export const getModal = (state: ReduxState) => state.common.modal;
export const getNotify = (state: ReduxState) => state.common.notify;
export const getLoading = (state: ReduxState) => state.common.loading;

export default commonSlice.reducer;
