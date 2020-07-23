import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render() {
    return (
      <p className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </p>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectCity: selectCity }, dispatch);
};

const mapStateToProps = state => {
  return { selectedCity: state.selectedCity };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
