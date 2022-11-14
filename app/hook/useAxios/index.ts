/** @format */

import {useState} from 'react';
import axios, {AxiosRequestConfig} from 'axios';
import useLoading from '@hook/useLoading';

interface props {
  callbackSuccess?(data: any): any;
  callbackError?(e: any): any;
  config: AxiosRequestConfig;
  isLoading?: boolean;
  jwt?: boolean;
}

const useAxios = () => {
  const [data, setData] = useState({}); //data call api success
  const [error, setError] = useState({}); // error call api error
  const [percentDownload, setPercentDownload] = useState(0); // percent download data
  const [percentUpload, setPercentUpload] = useState(0); // percent upload data
  const {showLoading, hideLoading} = useLoading();

  //get access token from redux
  const accessToken = '';

  //get refresh token from redux
  const refreshToken = '';

  const call = async (props: props) => {
    const {config, callbackError, callbackSuccess, jwt, isLoading} = props;
    var result = false;
    isLoading && showLoading();

    if (jwt) {
      config.headers = {
        jwt: `JWT ${accessToken}`,
      };
    }

    console.log('Call :', config.url, config.method);

    await axios({
      ...config,
      onDownloadProgress: (progressEvent: any) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        setPercentDownload(percentCompleted);
      },
      onUploadProgress: (progressEvent: any) => {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        setPercentUpload(percentCompleted);
      },
    })
      .then(res => {
        const {data} = res;
        setData(data);
        callbackSuccess && callbackSuccess(data);
        result = data;
      })
      .catch(e => {
        callbackError && callbackError(e);
        setError(e);
      });
    isLoading && hideLoading();
    return result;
  };

  return {
    call,
    data,
    error,
    percentDownload,
    percentUpload,
  };
};

export default useAxios;
