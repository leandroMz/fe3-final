import { useContext } from "react";
import { DentalContext } from "../DentalContext";
import { Link } from "react-router-dom";
import dent from '/images/dentist.png';

export const Card = ({ dentist }) => {
  const { id, name, username } = dentist;
  const { favorites, addFavorite, removeFavorite } = useContext(DentalContext);
  const isFavourite = favorites.some((fav) => fav.id === id);

  const handleAddFavorite = () => {
    if (isFavourite) {
      removeFavorite(dentist);
    } else {
      addFavorite(dentist);
    }
  };

  return (
    <div className='card'>
      <Link to={`/dentist/${id}`}>
        <img src={dent} alt="" />
        <p className='nameDentist'><b>{name}</b></p>
        <hr />
      </Link>
      <div className='card-foot'>
        <p>{id}</p>
        <p>({username})</p>
        <button
          onClick={handleAddFavorite}
          className='bootomCard'
          style={{ color: isFavourite ? 'red' : '#7d9cab' }}
        >
          ❤
        </button>
      </div>
    </div>
  );
};
