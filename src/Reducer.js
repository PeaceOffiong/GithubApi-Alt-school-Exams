

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return { ...state, Apidata: action.payload };
    case "SET_LOADING":
      return { ...state, loading: false };
    case "SET_REPOSITORIES": 
      return { ...state, repositories: action.payload };
    case "SET_PAGINATED_REPOSITORY":
      return { ...state, paginatedRepositories: action.payload[state.page] };
    case "SET_PAGE":
      return {...state, page: action.payload}
  }

  throw new Error("no matching type");
}

export default Reducer