export const addFav = (character) => {
    return {
      type: "ADD-FAV",
      payload: character
    };
  };
  
  export const removeFav = (id) => {
    return {
      type: "REMOVE-FAV",
      payload: id
    };
  };
  