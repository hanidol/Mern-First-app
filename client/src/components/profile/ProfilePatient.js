import PropTypes from 'prop-types';
import React from "react"

import formatDate from '../../utils/formatDate';

const ProfilePatient = ({
  patient: { hospital, degree, feildofzheimer, from, to, description },
}) => (
  <div>
    <h3 className='text-dark'>{hospital}</h3>

    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>

    <p>
      <strong>Grade: </strong>
      {degree}
    </p>

    <p>
      <strong>Field of Zheimer: </strong>
      {feildofzheimer}
    </p>

    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfilePatient.propTypes = {
  patient: PropTypes.array.isRequired,
};

export default ProfilePatient;
