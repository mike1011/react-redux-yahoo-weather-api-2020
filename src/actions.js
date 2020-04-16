import fetch from 'cross-fetch';
const OAuth = require('oauth');
export const SELECT_CITY = 'SLECT CITY';
export const REQUEST_FORECASTS = 'REQUEST FORECASTS';
export const RECEIVE_FORECASTS = 'RECEIVE FORCASTS';
export const INVALIDATE_CITY = 'INVALIDATE CITY';


export function selectCity(city) {
  return {
    type: SELECT_CITY,
    city,
  };
}

export function invalidateCity(city) {
  return {
    type: INVALIDATE_CITY,
    city,
  };
}

function requestForecasts(city) {
  return {
    type: REQUEST_FORECASTS,
    city,
  };
}

function receiveForecasts(city, json) {
  return {
    type: RECEIVE_FORECASTS,
    city,
    forecasts: json.forecasts,
    location: json.location,
    current_observation: json.current_observation,
    receivedAt: Date.now(),
  };
}

function encodeForYahoo(city, dispatch) {
  var header = {
      "X-Yahoo-App-Id": process.env.APP_ID
  };
  var request = new OAuth.OAuth(
      null,
      null,
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
  );
  request.get(
      "https://weather-ydn-yql.media.yahoo.com/forecastrss?location="+city+"&format=json",
      null,
      null,
      function (err, data, result) {
          if (err) return false;
          if(result.statusCode === 200) {
              let jsonData = JSON.parse(data)
              dispatch(receiveForecasts(city, jsonData))

          }

      }

  );
}

function fetchForecasts(city) {
  return (dispatch) => {
    dispatch(requestForecasts(city));
    fetch(encodeForYahoo(city, dispatch))
  };
}

function shouldFetchForecasts(state, city) {
  const forecasts = state.forecastsByCity[city];
  if (!forecasts) {
    return true;
  } else if (forecasts.isFetching) {
    return false;
  } else {
    return forecasts.didInvalidate;
  }
}

export function fetchForecastsIfNeeded(city) {
  return (dispatch, getState) => {
    if (shouldFetchForecasts(getState(), city)) {
      return dispatch(fetchForecasts(city));
    }
  };
}
