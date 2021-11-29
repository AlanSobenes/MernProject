import '../App.css';
import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Item = (props) => {
    const [items, setItems] = useState([])
    const {type} = useParams()
    const {cat}= useParams()
    const {link}=useParams()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${type}`)
            .then(res => {
                setItems(res.data.items)
                
            })
    }, [])
    
    
    return (
        <div>
            
            <div style={{ display: 'flex', marginLeft: '25%', marginTop: '40px', marginBottom: '40px' }}>
                <h3 ><Link to={`/${cat}`} style={{ textDecoration:'none', color:'orange'}} className="hover">Brew Menu,</Link> {type} </h3>
            </div>
            
            <div className='flex'>
                <div className='brewNavBar' style={{ width: '200px' }} >
                    <h4>Drinks</h4>
                    <div className='list'>
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
                    <h4>Food</h4>
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
            
                <br />
                <div style={{ columnCount:'2', columnGap:'10px', padding:'30px'}}>
                    {items.map((item) => (
                    <div style={{marginBottom:'20px'}}>
                        <div className='flex' style={{ alignItems: 'center', textDecoration: 'none'}}>
                            <div>
                                <Link to={`/oneItem/${cat}/${type}/${item._id}/${link}`} >
                                    <img className='shrink' src={item.image} alt='drink' style={{ height: '100px', width: '115px', borderRadius: '50%' }} />
                                </Link>
                            </div>
                            <div>
                                <Link to={`/oneItem/${cat}/${type}/${item._id}/${link}`} style={{ textDecoration: 'none', color: 'orange' }} >
                                    <p style={{ marginLeft: '25px', marginRight: '50px' }} className='hover'>{item.name}</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
export default Item