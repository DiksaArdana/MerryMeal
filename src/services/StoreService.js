import axios from "axios";


// GET List Role
export function getListRole(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/auth/role-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET Role Detail
export function getRole(id, callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/auth/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET List Role
export function getListCampaign(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/meal/campaign-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET Role Detail
export function getCampaign(id, callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/campaign/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET List Menu
export function getListMenu(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/meal/menu-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListMenuPartner(id,callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/menu-partner/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET Menu Detail
export function getMenu(id, callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/menu/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListOrderPartner(id,callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/order-list/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// // GET Search By Keyword
// export function getSearchByKeyword(keyword, callback, errorCallback) {
//   axios
//     .get(`http://localhost:8082/api/store/search?keyword=${keyword}`)
//     .then((res) => {
//       if (callback != null) {
//         callback(res.data);
//       }
//     })
//     .catch((err) => {
//       if (errorCallback != null) {
//         errorCallback(err.message);
//       }
//     });
// }

