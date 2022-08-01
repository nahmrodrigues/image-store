// import qs from 'qs'

// const CLIENT_ID = '8ec082102934175'
// const API_URL = 'https://api.imgur.com'

export const login = () => {
  // const querystring = {
  //   client_id: CLIENT_ID,
  //   response_type: 'token'
  // }

  // window.location = `${API_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  window.location = 'http://localhost:8080/oauth2/callback#access_token=teste'
}
