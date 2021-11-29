import '../App.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BrewMenu = (props) => {
    const [brewMenu, setBrewMenu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/brewMenu')
            .then(res => {
                setBrewMenu(res.data.items)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(brewMenu)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px', color:'orange' }}>
                <h3 >Brew Menu</h3>
            </div>

            <div className='flex'>
                <div className='brewNavBar' style={{ width: '200px' }} >
                    <h4 style={{color:'cornflowerblue'}}>Drinks</h4>
                    <div className='list' >
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/HotDrinks/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Hot Drinks</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/HotCoffees/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Hot Coffees</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/ColdCoffees/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Cold Coffees</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/BlendedDrinks/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Blended Drinks</h5>
                        </Link>
                        
                    </div>
                    <br />
                    <h4 style={{color:'cornflowerblue'}}>Food</h4>
                    <div className='list'>
                    <Link onClick={()=>window.location.href='/brew/BrewMenu/Pastries/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Pastries</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/EggBites/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Egg Bites</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/Bagels/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Bagels</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/BreakfastSandwiches/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Breakfast Sandwiches</h5>
                        </Link>
                        <Link onClick={()=>window.location.href='/brew/BrewMenu/BreakfastBurritos/brew'} style={{ textDecoration: 'none', color: 'grey' }}>
                        <h5 className='hover02'>Breakfast Burritos</h5>
                        </Link>
                    </div>
                </div>
                <div>

                    <div style={{ columnCount: '2', columnGap: '10px' }} >

                        <div>
                            <Link to='/brew/BrewMenu/HotDrinks/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {brewMenu[0] ? <img className="shrink" src={brewMenu[0].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[0] ? <p style={{ marginLeft: '25px', marginRight: '50px' }}  className='hover'>{brewMenu[0].name}</p> : ""}
                            </Link>
                        </div>
                        <div>
                            <Link to='/brew/BrewMenu/ColdCoffees/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {brewMenu[2] ? <img className="shrink"  src={brewMenu[2].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[2] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[2].name}</p> : ""}
                            </Link>
                        </div>


                        <div>
                            <Link to='/brew/BrewMenu/HotCoffees/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '19px', textDecoration: 'none' }}>
                                {brewMenu[1] ? <img className="shrink" src={brewMenu[1].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[1] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[1].name}</p> : ""}
                            </Link>
                        </div>
                        <div>
                            <Link to='/brew/BrewMenu/BlendedDrinks/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {brewMenu[3] ? <img className="shrink" src={brewMenu[3].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[3] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[3].name}</p> : ""}
                            </Link>
                        </div>

                    </div>
                    <br />
                    <div style={{ columnCount: '2', columnGap: '10px' }}>

                        <div>
                            <Link to='/brew/BrewMenu/Pastries/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {brewMenu[4] ? <img className="shrink" src={brewMenu[4].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[4] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[4].name}</p> : ""}
                            </Link>
                        </div>
                        <div>
                            <Link to='/brew/BrewMenu/EggBites/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                                {brewMenu[5] ? <img className="shrink" src={brewMenu[5].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[5] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[5].name}</p> : ""}
                            </Link>
                        </div>


                        <div>
                            <Link to='/brew/BrewMenu/Bagels/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '19.5px', textDecoration: 'none' }}>
                                {brewMenu[6] ? <img className="shrink"  src={brewMenu[6].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                                {brewMenu[6] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[6].name}</p> : ""}
                            </Link>
                        </div>

                        <Link to='/brew/BrewMenu/BreakfastSandwiches/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                            {brewMenu[7] ? <img className="shrink" src={brewMenu[7].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                            {brewMenu[7] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[7].name}</p> : ""}
                        </Link>
                    </div>



                    <div>
                        <Link to='/brew/BrewMenu/BreakfastBurritos/brew' className='flex' style={{ alignItems: 'center', marginLeft: '35px', marginTop: '20px', textDecoration: 'none' }}>
                            {brewMenu[8] ? <img className="shrink"  src={brewMenu[8].image} alt='hot drinks' style={{ height: '100px', width: '100px', borderRadius: '50%' }} /> : ""}
                            {brewMenu[8] ? <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{brewMenu[8].name}</p> : ""}
                        </Link>
                    </div>

                </div>
            </div>

        </div>


    )
}
export default BrewMenu
// {brewDrink.map((item) => (
//     <div id={item._id} style={{display:'flex', alignItems: 'center', margin: '25px'}} >
//         <div>
//             <img src={item.image} style={{ height: '95px', width: '95px', borderRadius: '50%' }} />

//         </div >
//         <p style={{color:'black', marginLeft:'25px'}}>
//             {item.name}
//         </p>
//     </div>
// )
// )}
// className='flex' style={{flexWrap: 'wrap', alignContent:'start'}}