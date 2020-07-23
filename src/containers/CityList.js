import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import City from './City';

class CityList extends Component {
  componentDidMount = () => {
    return this.props.setCities();
  };

  render() {
    if (this.props.cities) {
      return (
        <div className="cities">
          {this.props.cities.map(city => (
            <City city={city} key={city.name} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <p>No cities to show</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCities: setCities }, dispatch);
};

const mapStateToProps = state => {
  return { cities: state.cities };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
