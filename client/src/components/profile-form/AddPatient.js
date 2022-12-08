import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from "react"

import { addPatient } from '../../actions/profile';

const AddPatient = ({ addPatient }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospital: '',
    degree: '',
    feildofzheimer: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { hospital, degree, feildofzheimer, from, to, current, description } =
    formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxOnChange = (e) => {
    setFormData({ ...formData, current: !current });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addPatient(formData, navigate);
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add Your Patient</h1>

      <p className='lead'>
        
        Add any Hospital, Company , etc that you
        have attended
      </p>

      <small> * required field</small>

      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Hospital '
            name='hospital'
            value={hospital}
            onChange={handleOnChange}
            
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Stade of Zheimer'
            name='degree'
            value={degree}
            onChange={handleOnChange}/>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Field Of Zheimer'
            name='feildofzheimer'
            value={feildofzheimer}
            onChange={handleOnChange}
          />
        </div>

        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={handleOnChange}
          />
        </div>

        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              value={current}
              checked={current}
              onChange={handleCheckboxOnChange}
            />{' '}
            Current Hospital
          </p>
        </div>

        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={handleOnChange}
            disabled={current}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Description'
            value={description}
            onChange={handleOnChange}
          />
        </div>

        <input type='submit' className='btn btn-primary my-1' />

        <Link className='btn my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddPatient.propTypes = {
  addPatient: PropTypes.func.isRequired,
};

export default connect(null, { addPatient })(AddPatient);
