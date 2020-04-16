import React from 'react';
import PropTypes from 'prop-types';
import './Forecasts.scss';


class Forecasts extends React.Component {

  render() {
    const forecasts = this.props.forecasts;
    const location = this.props.location;
    const current_observation = this.props.current_observation;

    return (

          <div className="container">
            <div className="w-100 d-block p-3 mt-5 bg-light border">
              <h2>Quick Weather report for {location.city}: </h2>

              <div className="row">
                  <div className="col-lg-12 pt-3 pb-3">

                    <ul className="list-group list-group-flush row-overflow" style={{"display": "flex", flexDirection: "row",maxWidth: "100%","overflow-x": "auto"}}>
                    <li type="button" className="list-group-item list-group-item-action active">
                      <h3>Forecast Details</h3>
                      <p>
                        <small>{location.region} </small>,
                        {location.country}
                      </p>

                    </li>

                      {forecasts.map((forecast, i) => {

                        return (
                          <li className="list-group-item" key={i}>
                              <div>
                                <strong>Day: </strong><span>{forecast.day}</span>
                              </div>
                              <div>
                                <strong>Forecast: </strong><span>{forecast.text}</span>
                              </div>
                              <div>
                                <strong>WindSpeed: </strong><br />
                                <span className="fa fa-arrow-up mr-1"></span> {forecast.high}
                                <span className="fa fa-arrow-down mr-1 ml-2"></span> {forecast.low}
                              </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-lg-12 pt-3 pb-3">
                    <h3>Current Observation</h3>
                  </div>
                  <div className="col-lg-3">
                    <ul className="list-group list-group-flush style-list">
                      <li type="button" className="list-group-item list-group-item-action active">
                        <h3>Wind Details</h3>
                      </li>

                          <li className="list-group-item">
                              <div>
                                <strong><span className="fa fa-icicles mr-1"></span>Chill: </strong><span>{current_observation.wind.chill}</span>
                              </div>
                              <div>
                                <strong>Direction: </strong><span>{current_observation.wind.direction}</span>
                              </div>
                              <div>
                                <strong>Speed: </strong><span>{current_observation.wind.speed}</span>
                              </div>
                          </li>
                    </ul>

                  </div>
                  <div className="col-lg-3">
                    <ul className="list-group list-group-flush style-list">
                      <li type="button" className="list-group-item list-group-item-action active">
                        <h3>Atmosphere</h3>
                      </li>

                          <li className="list-group-item">
                              <div>
                                <strong><span className="fa fa-tint mr-1"></span>Humidity: </strong><span>{current_observation.atmosphere.humidity}</span>
                              </div>
                              <div>
                                <strong>Visibility: </strong><span>{current_observation.atmosphere.visibility}</span>
                              </div>
                              <div>
                                <strong>Pressure: </strong><span>{current_observation.atmosphere.pressure}</span>
                              </div>
                              <div>
                                <strong><span className="fa fa-thermometer-high mr-1"></span>Rising: </strong><span>{current_observation.atmosphere.pressure}</span>
                              </div>

                          </li>
                    </ul>

                  </div>
                  <div className="col-lg-3">
                    <ul className="list-group list-group-flush style-list">
                      <li type="button" className="list-group-item list-group-item-action active">
                        <h3>Astronomy</h3>
                      </li>

                          <li className="list-group-item">
                              <div>
                                <strong><span className="fa fa-sun mr-1"></span>Sunrise: </strong><span>{current_observation.astronomy.sunrise}</span>
                              </div>
                              <div>
                                <strong><span className="fa fa-moon mr-1"></span>Sunset: </strong><span>{current_observation.astronomy.sunset}</span>
                              </div>
                          </li>
                    </ul>

                  </div>
                  <div className="col-lg-3">
                    <ul className="list-group list-group-flush style-list">
                      <li type="button" className="list-group-item list-group-item-action active">
                        <h3>Condition</h3>
                      </li>

                          <li className="list-group-item">
                              <div>
                                <strong>Detail: </strong><span>{current_observation.condition.text}</span>
                              </div>
                              <div>
                                <strong><span className="fa fa-thermometer-full mr-1"></span>Temperature: </strong><span>{current_observation.condition.temperature}</span>
                              </div>
                          </li>
                    </ul>

                  </div>

                </div>
               <hr />
              </div>
            </div>



    );
  }
}

Forecasts.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

export default Forecasts;