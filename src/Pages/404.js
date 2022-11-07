import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-container">
        <h2>oops! it's a dead end</h2>
        <Link to="/" className="btn">
          back home
      </Link>
    </div>
  )
}

export default ErrorPage;