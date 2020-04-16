import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  selectCity,
  invalidateCity,
  fetchForecastsIfNeeded,
} from '../actions';
import Picker from '../components/Picker';
import Forecasts from '../components/Forecasts';

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const {dispatch, selectedCity} = this.props;
    dispatch(fetchForecastsIfNeeded(selectedCity));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCity !== prevProps.selectedCity) {
      const {dispatch, selectedCity} = this.props;
      dispatch(fetchForecastsIfNeeded(selectedCity));
    }
  }

  handleChange(nextCity) {
    this.props.dispatch(selectCity(nextCity));
    this.props.dispatch(fetchForecastsIfNeeded(nextCity));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const {dispatch, selectedCity} = this.props;
    dispatch(invalidateCity(selectedCity));
    dispatch(fetchForecastsIfNeeded(selectedCity));
  }

  render() {
    const {selectedCity, forecasts, location, current_observation,  isFetching} = this.props;
    return (
      <div className="container">
          <div className="w-100 d-block p-3 mt-5 bg-light border">
          <Picker
            value={selectedCity}
            onChange={this.handleChange}
            options={['New York', 'Sunnyvale, CA', 'Washington D.C', 'Los Angeles, CA']}
          />

          {isFetching && forecasts.length === 0 && <h2>Loading...</h2>}
          {!isFetching && forecasts.length === 0 && <h2>Empty.</h2>}
          {forecasts.length > 0 &&
            <div style={{opacity: isFetching ? 0.5 : 1}}>
            <Forecasts forecasts={forecasts} location={location} current_observation={current_observation} />
            </div>}
        </div>
      </div>
    );
  }
}

AsyncApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const {selectedCity, forecastsByCity} = state;
  const {
    isFetching,
    forecasts,
    location,
    current_observation
  } = forecastsByCity[selectedCity] || {
    isFetching: true,
    forecasts: [],
    location: [],
    current_observation: []

  };
  return {
    isFetching,
    forecasts,
    location,
    current_observation,
    selectedCity,
  };
}

export default connect(mapStateToProps)(AsyncApp);
