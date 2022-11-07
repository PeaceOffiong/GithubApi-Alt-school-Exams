import React, { useContext, useEffect, useReducer } from "react";
import useFetch from "./useFetch";
import reducer from "./Reducer";

const AppContext = React.createContext();

const paginate = (people) => {
  const itemPerPage = 10;
  const numberOfPages = Math.ceil(people.length / itemPerPage);

  const newPeople = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemPerPage;
    return people.slice(start, start + itemPerPage);
  });

  return newPeople;
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
      console.log(data2);
      dispatch({ type: "SET_PAGINATED_REPOSITORY", payload: paginate(data2) });
    }
      
  }, [loading, state.page, loading2]);


  const nextPage = () => {
      let nextPage = state.page + 1;
      if (nextPage > state.Apidata.length - 1) {
        nextPage = 0;
      }
      dispatch({ type: "SET_PAGE", payload: nextPage });
  };

  const prevPage = () => {
      let prevPage = state.page - 1;
    if (prevPage < 0) {
        prevPage = state.Apidata.length - 1;
    }
    dispatch({type: "SET_PAGE", payload: prevPage})
    
  };

  const handlePage = (index) => {
    dispatch({ type: "SET_PAGE", payload: index });
  };

  console.log(state.Apidata);
  console.log(state.repositories);
  console.log(state.paginatedRepositories)

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
