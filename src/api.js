const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      //throw new Error('Not Found')
      //return callApi('/badges'); '<-- Asi estaba antes, pero monstraba los badges de más viej a más nuevo'
      return callApi('/badges').then(badges => badges.slice(0).reverse()); //<-- con esto se muestran los badges de más nuevo a más viejo
    },

    create(badge) {
      // throw new Error('500: Server Error')
      return callApi(`/badges`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },

    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },

    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },

    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
