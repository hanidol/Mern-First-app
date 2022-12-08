import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from "react"

import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='large text-primary'>Doctors</h1>

          <p className='lead'>
            <i className='fas fa-laptop-code'></i> Browse and Connect with
            Doctors
          </p>

          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profiles found...</h4>
            )}
          </div>
        </>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ profile: state.profile });

export default connect(mapStateToProps, { getProfiles })(Profiles);
