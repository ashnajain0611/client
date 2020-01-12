const httpConfig = {
    SERVER_API: 'http://192.168.1.247:8080',
  };
  const httpService = {
    get: (url, data) => {
      url = httpConfig['SERVER_API'] + url;
      return fetch(url).then(response => {
        return response.json();
      });
    },
    post: (url, data) => {
      url = httpConfig['SERVER_API'] + url;
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(data),
      }).then(response => {
        return response.json();
      });
    },
  
    put: (url, data) => {
      url = httpConfig['SERVER_API'] + url;
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => {
        return response.json();
      });
    },
  
    delete: url => {
      url = httpConfig['SERVER_API'] + url;
      return fetch(url, {
        method: 'POST',
      }).then(response => {
        return response.json();
      });
    },
  };
  
  export default httpService;
  