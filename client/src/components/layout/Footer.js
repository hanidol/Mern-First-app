import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { logout } from '../../actions/auth';

const Footer = ({ auth: { isAuthenticated, loading }, logout }) => (
  <div className="footer down">
    <hr />
    <p>This App created using Mern FulStack (React,Nodejs,Mongodb) by Hani Nasri</p>
  </div>

);
Footer.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logout })(Footer);

