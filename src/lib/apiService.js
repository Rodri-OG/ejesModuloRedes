// lib/apiService.js
const API_URL = 'https://m.ejes.com/';

const login = async () => {
  const response = await fetch(`${API_URL}api-token-auth/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      username: 'frontend_user',
      password: 'jVg78mKh5eZJs7A',
    }),
  });
  

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`Failed to log in: ${response.status} ${errorDetails}`);
  }

  const data = await response.json();
  return data.token;
};

const getTweets = async (token, id_metrica, desde, hasta) => {
  const url = new URL(`${API_URL}api/get_tweets/`);
  url.searchParams.append('id_metrica', id_metrica);
  url.searchParams.append('desde', desde);
  url.searchParams.append('hasta', hasta);

  const response = await fetch(url, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`Failed to fetch tweets: ${response.status} ${errorDetails}`);
  }

  const data = await response.json();
  return data;
};



async function getMetricDataSerie(id_metrica) {
  try {
    const response = await fetch(`https://m.ejes.com/api/get_serie_kpi/?id_metrica=${id_metrica}&rango=7`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getMetricDataSerie15(id_metrica) {
  try {
    const response = await fetch(`https://m.ejes.com/api/get_serie_kpi/?id_metrica=${id_metrica}&rango=15`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getMetricDataSerie30(id_metrica) {
  try {
    const response = await fetch(`https://m.ejes.com/api/get_serie_kpi/?id_metrica=${id_metrica}&rango=30`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getMetricDataSerie45(id_metrica) {

  try {
    const response = await fetch(`https://m.ejes.com/api/get_serie_kpi/?id_metrica=${id_metrica}&rango=45`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
}


async function getMetricTopTweets(id_metrica, criterio) {
  try {
    const response = await fetch(`https://m.ejes.com/api/get_top_tweets/?id_metrica=${id_metrica}&criterio=${criterio}&cantidad=5&desde=2024-06-08 00:00&hasta=2024-06-14 23:59`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
};

async function getTweetSource() {
  try {
    const response = await fetch(`https://m.ejes.com/api/get_kpis/?username=ejesuser_test`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
};

async function getMetricDataSerieRange(id_metrica, range) {
  try {
    const response = await fetch(`https://m.ejes.com/api/get_serie_kpi/?id_metrica=${id_metrica}&rango=${range}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { ...data, id_metrica };
  } catch (error) {
    console.log(error);
    return null;
  }
}


export { login, getTweets,  getMetricDataSerie, getMetricTopTweets, getMetricDataSerie15, getMetricDataSerie30, getMetricDataSerie45, getTweetSource, getMetricDataSerieRange};
