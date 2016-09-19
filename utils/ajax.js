function stringify(params) {
  return Object.keys(params).map(key => {
    return `${key}=${params[key]}`;
  }).join('&');
}

const Ajax = {
  get(url, params = {}, headers = {}) {
    return fetch(`${url}?${stringify(params)}`, {
      headers
    }).then(resp => resp.json());
  },

  post(url, params = {}, headers = {}) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

    return fetch(url, {
      method: 'post',
      headers,
      body: stringify(params)
    }).then(resp => resp.json());
  }
};

export default Ajax;
