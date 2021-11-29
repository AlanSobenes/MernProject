import '../App.css';
import React, { useEffect, useState} from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'

const BerryItem = (props) => {
    const [items, setItems] = useState([])
    const {type} = useParams()
    const {cat} = useParams()
    const {link} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${type}`)
            .then(res => {
                setItems(res.data.items)
                
            })
    }, [])
    
        return (
        <div>
            
            <div style={{ display: 'flex', marginLeft: '25%', marginTop: '40px', marginBottom: '40px' }}>
                <h3 ><Link to={`/${cat}`} style={{ textDecoration:'none', color:'orange'}} className="hover01">Berry Menu,</Link> {type} </h3>
            </div>

            <div className='flex'>
                <div className='brewNavBar' style={{ width: '200px' }} >
                    <h4 style={{color:'orange'}}>Drinks</h4>
                    <div className='list' >
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/FreshJuices/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Fresh Juices</h5>
                        </Link>
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/Smoothies/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Smoothies</h5>
                        </Link>
                    </div>
                    <br />
                    <h4 style={{color:'orange'}}>Food</h4>
                    <div className='list'>
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/FreshFruitBowls/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Fresh Fruit Bowls</h5>
                        </Link>
                        <Link onClick={() => window.location.href = '/Berry/BerryMenu/Sandwiches/berry'} style={{ textDecoration: 'none', color: 'grey' }}>
                            <h5 className='hover02'>Sandwiches</h5>
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
export default BerryItem