import { useContext } from "react";
import { DentalContext } from "../DentalContext";
import { Link } from "react-router-dom";
import nothing from '/images/dentist-chair.png';
import { Card } from "../components/Card";

export const Favs = () => {
  const { favorites, theme } = useContext(DentalContext);

  return (
    <div className={`orderFavorites ${theme.color}`}>
      {favorites.length === 0 ? (
        <div className='orderNoAdd'>
          <div className='NoAddFavDent'>
            <h4>You have not added <br /> any professional</h4>
            <p>Please click on the ❤ to have your <br /> professionals saved</p>
            <Link to="/">
              <button>Back to home</button>
            </Link>
          </div>
          <img src={nothing} alt="" />
        </div>
      ) : (
        <div className='orderAdd'>
          <h4 className='centered'>Your favorites</h4>
          <ul className='flex-container'>
            {favorites.map((dentist) => (
              <li key={dentist.id}>
                <Card dentist={dentist} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};