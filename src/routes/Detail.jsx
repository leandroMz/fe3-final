import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dentistDet from '/images/medico.png';
import { DentalContext } from "../DentalContext";

export const Detail = () => {
  const { id } = useParams();
  const { theme } = useContext(DentalContext);
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(response => setDentist(response));
  }, []);

  return (
    <main className={`orderDetail ${theme.color}`}>
      <h4>Professional details</h4>
      <hr />
      <div className="detailS">
        <img src={dentistDet} alt="" />
        <div className='detail'>
          <h2>Dentist information id:{id}</h2>
          <p><b>Name:</b> {dentist.name}</p>
          <p><b>Phone:</b> {dentist.phone}</p>
          <p><b>Email:</b> {dentist.email}</p>
          <p><b>Website:</b> {dentist.website}</p>
        </div>
      </div>
    </main>
  );
};
