import React from 'react';
import { useGlobalContext } from "../context";
import { EachRepo } from '../Components';

const Repositories = () => {
  const { loading, repositories, paginatedRepositories, nextPage, prevPage,handlePage, page } = useGlobalContext();
  if (loading) {
    return (
      <article className="intro">
        <h2>Loading...</h2>
      </article>
    )
  }
  return (
    <section className="contained">
      <ul className='gig'>
        {paginatedRepositories.map((each) => {
          return <EachRepo key={each.id} each={each} />;
        })}
      </ul>
      <div className="btn-container">
        <button className="prev-btn" onClick={() => prevPage()}>
          Prev
        </button>

        {repositories.map((each, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}
            >
              {index}
            </button>
          );
        })}

        <button className="prev-btn" onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </section>
  );
}

export default Repositories