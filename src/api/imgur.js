import qs from 'qs'
import axios from 'axios'

const API_URL = 'https://api.imgur.com'

export const login = () => {
  const querystring = {
    client_id: process.env.VUE_APP_CLIENT_ID,
    response_type: 'token'
  }

  window.location = `${API_URL}/oauth2/authorize?${qs.stringify(querystring)}`;

  // Imgur API is not working on localhost
  // window.location = 'http://localhost:8080/oauth2/callback#access_token=teste'
}

export const fetchImages = async (token) => {
  const response = await axios.get(`${API_URL}/3/account/me/images`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data.data;
}

export const uploadImages = (token, images) => {
  const promises = Array.from(images).map((image) => {
    const formData = new FormData();

    formData.append('image', image);

    return axios.post(`${API_URL}/3/image`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  });

  return Promise.all(promises);
}
