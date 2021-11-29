import '../App.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BerryMenu = (props) => {
    const [BerryMenu, setBerryMenu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/BerryMenu')
            .then(res => {
                setBerryMenu(res.data.items)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(BerryMenu)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px', color: 'cornflowerblue' }}>
                <h3 >Berry Menu</h3>
            </div>
            <div className='flex'>
                <div className='brewNavBar' style={{ width: '200px' }} >
                    <h4 style={{ color: 'orange' }}>Drinks</h4>
                    <div className='list' >
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/FreshJuices/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Fresh Juices</h5>
                        </Link>
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/Smoothies/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Smoothies</h5>
                        </Link>
                    </div>
                    <br />
                    <h4 style={{ color: 'orange' }}>Food</h4>
                    <div className='list'>
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/FreshFruitBowls/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Fresh Fruit Bowls</h5>
                        </Link>
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/Sandwiches/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Sandwiches</h5>
                        </Link>
                    </div>
                </div>
                <div>
                    <div style={{ columnCount: '2', columnGap: '10px' }} >
                        <div style={{ height: "165px" }}>
                            <Link to='/Berry/BerryMenu/FreshJuices/berry' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none', height: '' }}>
                                {BerryMenu[0] ? <img className="shrink" src={BerryMenu[0].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {BerryMenu[0] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{BerryMenu[0].name}</p> : ""}
                            </Link>
                        </div>
                        <div style={{ height: "163px" }}>
                            <Link to='/Berry/BerryMenu/Smoothies/berry' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {BerryMenu[1] ? <img className="shrink" src={BerryMenu[1].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {BerryMenu[1] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{BerryMenu[1].name}</p> : ""}
                            </Link>
                        </div>
                    </div>
                    <br />
                    <div style={{ columnCount: '2', columnGap: '10px' }}>
                        <div style={{ height: "200px" }}>
                            <Link to='/Berry/BerryMenu/FreshFruitBowls/berry' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {BerryMenu[2] ? <img className="shrink" src={BerryMenu[2].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {BerryMenu[2] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{BerryMenu[2].name}</p> : ""}
                            </Link>
                        </div>
                        <div style={{ height: "199px" }}>
                            <Link to='/Berry/BerryMenu/Sandwiches/berry' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {BerryMenu[3] ? <img className="shrink" src={BerryMenu[3].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {BerryMenu[3] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{BerryMenu[3].name}</p> : ""}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BerryMenu
