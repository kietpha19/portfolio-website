// used when path is not valid
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1 className='error-page__heading'>This page {"doesn't"} exist</h1>
      <Link className='error-page__link' to={'/'}>
        Return to home
      </Link>
    </div>
  );
};

export default ErrorPage;
