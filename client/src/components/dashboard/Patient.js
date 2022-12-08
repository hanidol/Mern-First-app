import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from "react"

import { deletePatient } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Patient= ({ patient, deletePatient}) => {
  const patients = patient.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.hospital}</td>

      <td className='hide-sm'>{edu.degree}</td>

      <td className='hide-sm'>{edu.fieldofstudy}</td>

      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
      </td>

      <td>
        <button
          onClick={() => deletePatient(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className='my-2'>Patient Credentials</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>Hospital</th>

            <th className='hide-sm'>Grade</th>

            <th className='hide-sm'>Field of Zheimer</th>

            <th>Years</th>

            <th />
          </tr>
        </thead>
        <tbody>{patients}</tbody>
      </table>
    </>
  );
};

Patient.propTypes = {
  patient: PropTypes.array.isRequired,
  deletePatient: PropTypes.func.isRequired,
};

export default connect(null, { deletePatient })(Patient);
