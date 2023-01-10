import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import image from "../Image/CNEM4759.JPG"

const Home = () => {
  const {
    loading,
    Apidata,
    HandleRepositories,
  } = useGlobalContext();

  if (loading) {
    return (
      <article className="intro">
        <h2>Loading...</h2>
      </article>
    );
  }
  return (
    <main className="into">
      <Helmet>
        <title>Peace's Github Portfolio</title>
        <meta
          name="description"
          content="A responsive page displaying Peace's Github and repositories"
        />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>

      <article className="intro">
        <h2>hey there!</h2>
        <h2>i'm peace ben</h2>
        <h2>front-end engineer</h2>
        <small>
          followers:{Apidata.followers} following:{Apidata.following}
        </small>
        <p>
          public-Repos:{Apidata.public_repos} public-Gist:{Apidata.public_gists}
        </p>
      </article>
      <div className="center content">
        <div className="image-container">
          <img src={Apidata.avatar_url} alt="my picture" className="img" />
        </div>
      </div>
      <div className="calc">
        <Link to="/Repositories" onClick={HandleRepositories}>
          <button>Repositories</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
