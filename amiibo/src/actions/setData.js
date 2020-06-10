export const getData = (search) => dispatch => {
    dispatch({ type: FETCH_DATA });
    setTimeout(() => {
      axios
        .get(`https://www.amiiboapi.com/api/amiibo?name=${search}`)
        .then(res => {
          console.log(res);
          dispatch({ type: "NEW_SEARCH", payload: res.data });
        })
        .catch(err => {
          console.error("error fetching data from api. err: ", err);
          dispatch({ type: "SET_ERROR", payload: "No results found." });
        });
    }, 2000);
  };