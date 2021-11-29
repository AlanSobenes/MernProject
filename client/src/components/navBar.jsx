import '../App.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    return (
        <div>

            <div className='navBar'>
                <div className='flex' style={{ marginLeft: '20px' }}>
                    <Link to='/BrewMenu' style={{ textDecoration: 'none', color: 'orange' }}>
                        <h2 className='hover' >Brews</h2>
                    </Link>
                    <h2 style={{ color: 'black' }}> | </h2>
                    <Link to='/BerryMenu' style={{ textDecoration: 'none'}}>
                    <h2 className='hover01'>Berries</h2>
                    </Link>
                </div>
                <div>
                    <Link to='/' >
                        <img  src={logo} alt="Brews & Berries Logo" height={60} width={70} className='grow logo' />
                    </Link>
                </div>
                <div className='flex' style={{ marginRight: '20px' }}>
                    <h4>Join</h4>
                    <h4 style={{ color: 'black' }}> | </h4>
                    <h4>Login</h4>
                    <h4 style={{ color: 'black' }}> | </h4>
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <h4 ><span style={{color: 'orange'}} className='hover'>Cart</span>🛒</h4>
                    </Link>


                </div>

            </div>
            <hr />
        </div>
    )
}
export default NavBar