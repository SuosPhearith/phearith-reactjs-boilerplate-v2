//::================================>>Third party<<=================================::
import axios from 'axios';
//::================================================================================::

//::===============================>>Custom library<<===============================::
import { logout, saveToken } from '../utils/help/help';
import { message } from 'antd';
//::================================================================================::

//::==>> get base url from .env
const baseUrl: string = import.meta.env.VITE_API_URL;

//::==>> start core function
async function makeAPIRequest(method: string, url: string, data = {}) {
  //::==>> get accessToken from localstroage for make request
  let accessToken = localStorage.getItem('accessToken');

  try {
    //::==>> create request using axios
    const response = await axios.request({
      //::==>> method for make request
      method,
      //::==>> connect baseUrl with url provieded
      url: baseUrl + url,
      //::==>> get data
      data,
      headers: {
        //::==>> put token in header Bearer
        Authorization: `Bearer ${accessToken}`,
      },
    });

    //::==>> response back
    return response.data;
  } catch (error: any) {
    //::==>> if request error throw catch check status for apply refreshToken
    if (
      //::==>> if response status 401 and 403
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      //::==>> is condition we call api to get accessToken by using refreshToken
      try {
        //::==>> call method refreshToken to implement
        await refreshToken();
        //::==>> make request again after restore token by refreshToken function
        return makeAPIRequest(method, url, data);
      } catch (refreshError) {
        //::==>> logout from system
        logout();
      }
    } else {
      console.error('API request error:', error);
      message.error(error.response.data.message);
    }
  }
}

async function refreshToken() {
  try {
    //::==>> make request to get new accessToken by using refreshToken
    const newToken = await axios.post(`${baseUrl}auth/refreshToken`, {
      //::==>> get refreshToken from localstorage
      refreshToken: localStorage.getItem('refreshToken'),
    });
    //::==>> if response Ok we store new accessToken and new refreshToken
    saveToken(newToken.data.accessToken, newToken.data.refreshToken);
  } catch (error) {
    //::==>> if throw error system will auto logout
    logout();
  }
}

export default makeAPIRequest;
