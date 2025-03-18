export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
  postformData
  
};

async function get(url) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" , "Authorization" : `Bearer ${localStorage.getItem('token')}` }
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" , "Authorization" : `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization" : `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url) {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function postformData(url, formData) {
  const requestOptions = {
    method: "POST",
    body: formData,
    headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}` }
    
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// helper functions

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if ([401, 403].includes(response.status)) {
            window.location.reload()
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              localStorage.removeItem("token");
              localStorage.removeItem("admin_name");
              localStorage.removeItem("admin_id");
              localStorage.removeItem("role");
              localStorage.removeItem("admin_email")
              window.location.href = "/login"
              window.location.reload()
              alert('Session Expired');
          }

          const error = (data && data.message) || response.statusText;
          // alertActions.error(error);
          return Promise.reject(error);
      }

      return data;
  });
}  