import { useContext } from "react";
import { DentalContext } from "../DentalContext";
import contactDent from '/images/dentistCont.png';
import { Form } from "../components/Form";

export const Contact = () => {
  const { theme } = useContext(DentalContext);

  return (
    <main className={`Contact ${theme.color}`}>
      <div className='form-start'>
        <h1 className={`title ${theme.color}`}>Lets get started! Contact us</h1>
        <Form />
      </div>
      <img src={contactDent} alt="" />
    </main>
  );
};