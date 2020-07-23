import React, { Component } from 'react';
import { connect } from 'react-redux';

const CityDetail = props => {
  if (props.selectedCity) {
    const { name, address, slug } = props.selectedCity;
    return (
      <div className="active-city">
        <h2>{name}</h2>
        <h3>{address}</h3>
        <img
          src={`https://kitt.lewagon.com/placeholder/cities/${slug}`}
          alt={name}
          className="city-image"
        />
      </div>
    );
  }

  return null;
};

const mapStateToProps = state => {
  return { selectedCity: state.selectedCity };
};

export default connect(mapStateToProps)(CityDetail);
