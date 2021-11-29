import '../App.css';
import logo from '../images/logo.png'

import coffeeBeans from '../images/coffeeBeans.jpg'
import berries from '../images/berries.jpg'
import {Link} from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="home">
            
            <div className='homeLogo'>
                <img  src={logo} alt="business logo"style={{ height: '250px', width: '400px', borderRadius: '20px',background:'lightyellow',padding:'15px', marginTop: '15px' }}  />
                <p>Welcoming Brews & Berries most vibrant and rich selection of beverages and food</p>
            </div>
            <div className="flex" style={{justifyContent:'space-evenly'}}>
                <div className='homeLogo'>
                    <Link to='/BrewMenu' style={{textDecoration:'none', color:'orange'}}>
                    <img className="shrink"  src={coffeeBeans} alt="coffee bean " style={{ height: '250px', width: '250px', borderRadius: '50%',background:'lightyellow',padding:'15px'}} />
                    <h2 className="hover" >Browse Brew Menu</h2>
                    </Link>
                </div>
                <div className='homeLogo'>
                <Link to='/BerryMenu' style={{textDecoration:'none'}}>
                    <img className="shrink" src={berries} alt="coffee bean" style={{ height: '250px', width: '250px', borderRadius: '50%',background:'lightyellow',padding:'15px' }} />
                    <h2 className="hover01" >Browse Berry Menu</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home