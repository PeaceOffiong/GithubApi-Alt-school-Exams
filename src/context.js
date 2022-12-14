import React, { useContext, useEffect, useReducer } from "react";
import useFetch from "./useFetch";
import reducer from "./Reducer";

const AppContext = React.createContext();

const paginate = (repos) => {
  const itemPerPage = 10;
  const numberOfPages = Math.ceil(repos.length / itemPerPage);

  const newRepos = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemPerPage;
    return repos.slice(start, start + itemPerPage);
  });

  return newRepos;
};

const initialState = {
  loading: true,
  Apidata: [],
  page: 0,
  repositories: [],
  paginatedRepositories: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, data } = useFetch(
    "https://api.github.com/users/peaceOffiong"
  );
  const { loading: loading2, data: data2 } = useFetch(
    "https://api.github.com/users/PeaceOffiong/repos"
  );

  useEffect(() => {
    if (loading) {
      return
    } else if(!loading) {
      dispatch({ type: "SET_API_DATA", payload: data });
      dispatch({ type: "SET_LOADING" });
    }
    if (!loading2) {
      dispatch({ type: "SET_REPOSITORIES", payload: paginate(data2) });
      dispatch({ type: "SET_PAGINATED_REPOSITORY", payload: paginate(data2) });
    }
      
  }, [loading, state.page, loading2]);


  const nextPage = () => {
    const setNextPage = (page) => {
      let nextPage = page + 1;
      if (nextPage > state.repositories.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    }
    
    dispatch({ type: "SET_PAGE", payload: setNextPage(state.page) });
     
  };

  const prevPage = () => {
    const setPrevPage = (page) => {
      let prevPage = page - 1;
      if (prevPage < 0) {
        prevPage = state.repositories.length - 1;
      }
      return prevPage
    }
    dispatch({type: "SET_PAGE", payload: setPrevPage(state.page)})
    
  };

  const handlePage = (index) => {
    dispatch({ type: "SET_PAGE", payload: index });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePage,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
export default paginate;
