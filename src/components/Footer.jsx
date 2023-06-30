import DH from '/images/DH.png'
import instagram from '/images/ico-instagram.png'
import facebook from '/images/ico-facebook.png'
import whatsapp from '/images/ico-whatsapp.png'
import tiktok from '/images/ico-tiktok.png'
export const Footer = () => {
  return (
    <footer>
      <div className='initialFoot'>
        <div className='redes-foot'>
          <img className='icon' src={facebook} alt="Facebook logo" />
          <img className='icon' src={instagram} alt="Instagram logo" />
          <img className='icon' src={whatsapp} alt="Whatsapp logo" />
          <img className='icon' src={tiktok} alt="Tiktok logo" />
        </div>
        <div className='copy'>
          <p>Powered by</p>
          <img className='dh-logo' src={DH} alt="Digital House logo" />
        </div>
      </div>
      <div className='secondaryFoot'>
        <h4>work team</h4>
        <ul>          
          <li>Costilla Luciana</li>
          <li>Martinez Leandro</li>
        </ul>
      </div>
    </footer>
  )
}