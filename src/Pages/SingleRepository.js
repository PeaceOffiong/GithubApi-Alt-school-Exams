import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleRepository = () => {
  const { id } = useParams();
  const { paginatedRepositories } = useGlobalContext();

  const presentRepository = paginatedRepositories.find(each => each.name === id);
   if (!presentRepository) {
     return (
       <>
         <section className="loading">
           <h3>Oops!, No Repository of such</h3>
           <Link to="/" className="btn">
             back home
           </Link>
         </section>
       </>
     );
   }
  return (
    <>
      <article className="intro single">
        <h2>{presentRepository.name}</h2>
      </article>
      <div className="table">
        <table>
          <tr>
            <td className="description">Description:</td>
            <td>{presentRepository.description}</td>
          </tr>
          <tr>
            <td className="description">Language:</td>
            <td>{presentRepository.language}</td>
          </tr>
          <tr>
            <td className="description">Fork:</td>
            <td>{presentRepository.fork}</td>
          </tr>
          <tr>
            <td className="description">Branch:</td>
            <td>{presentRepository.default_branch}</td>
          </tr>
          <tr>
            <td className="description">Created At :</td>
            <td>{presentRepository.created_at}</td>
          </tr>
        </table>
      </div>
      <div className="container">
        <a href={presentRepository.svn_url} className="btn">
          <button>Visit Github</button>
        </a>
        <Link to="/" className="btn">
          <button>Back Home</button>
        </Link>
      </div>
    </>
  );
}

export default SingleRepository