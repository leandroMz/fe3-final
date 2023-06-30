import { createContext, useEffect, useReducer, useState } from "react";

const initialState = {
    color: 'light',
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  };
  
  const globalReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, color: action.payload };
      case 'ADD_FAVORITE':
        return { ...state, favorites: [...state.favorites, action.payload] };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export const DentalContext = createContext();
  
  export const DentalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);
    const [favorites, setFavorites] = useState(state.favorites);
  
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
  
    useEffect(() => {
      localStorage.setItem('theme', state.color);
    }, [state.color]);
  
    const changeColor = (color) => {
      dispatch({ type: 'CHANGE_COLOR', payload: color });
    };
  
    const addFavorite = (dentist) => {
      dispatch({ type: 'ADD_FAVORITE', payload: dentist });
      setFavorites([...favorites, dentist]);
    };
  
    const removeFavorite = (dentist) => {
      dispatch({ type: 'REMOVE_FAVORITE', payload: dentist });
      setFavorites(favorites.filter((fav) => fav.id !== dentist.id));
    };
  
    return (
      <DentalContext.Provider
        value={{
          theme:
            state,
          changeColor,
          favorites,
          addFavorite,
          removeFavorite
        }}
      >
        {children}
      </DentalContext.Provider>
    );
  };