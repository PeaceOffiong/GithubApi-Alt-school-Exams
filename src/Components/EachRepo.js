import React from 'react'
import { Link } from 'react-router-dom';

const EachRepo = ({ each }) => {
    const { name } = each;
  return (
    <li>
      <article className="card">
        <section className="center">
          <h3>{name}</h3>
        </section>
        <Link className="profile" to={`SingleRepositories/${name}`}>
          View Repository
        </Link>
      </article>
    </li>
  );
}

export default EachRepo