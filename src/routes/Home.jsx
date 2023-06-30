import { useContext, useEffect, useState } from "react";
import { DentalContext } from "../DentalContext";
import { Card } from "../components/Card";

export const Home = () => {
  const [dentists, setDentist] = useState([]);
  const { theme } = useContext(DentalContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentist(data));
  }, []);

  return (
    <main className={theme.color}>
      <h4 className='container-h4'>Some of our professionals</h4>
      <ul className='container'>
        {dentists.map(dentist => (
          <li key={dentist.id}>
            <Card dentist={dentist} />
          </li>
        ))}
      </ul>
    </main>
  );
};