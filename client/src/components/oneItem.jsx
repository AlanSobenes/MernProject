import '../App.css';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const OneItem = (props) => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    const { type } = useParams()
    const {cat} = useParams()
    const {link} = useParams()
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const totalPrice = Math.round((price * quantity)*100)/100
    const [cart, setCart] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${type}/` + id)
            .then(res => {
                setItem(res.data.item)
                setPrice(res.data.item.price)
            })
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Cart`)
            .then(res => {
                setCart(res.data.items)

            })
    }, [])
    // console.log('the cart has', cart)

    const submit = (e) => {
        e.preventDefault();
        console.log('hi' + cart)
        console.log(item)
        if(cart.length==0){
            const cartItem = {
            productId: item.productId,
            name: item.name,
            image: item.image,
            price: item.price,
            totalPrice: totalPrice,
            quantity: quantity,
        }
        axios.post('http://localhost:8000/api/Cart', cartItem)
            .then(res => {
                history.push('/cart')
                console.log("added to cart")
            })
            console.log('if statement executed')

        }else if(cart.length>0){
            let flag = false
            for (const product of cart) {
                console.log('print this ' + product.productId)
                if (product.productId == item.productId) {
                    flag = true
                    console.log('and print this ' + item.productId)
                    console.log('cart product has ' + product.quantity)
                    console.log('want to add ' + quantity)
                    const update = {
                        quantity: product.quantity += (quantity*1),
                    
                        totalPrice: product.totalPrice += (quantity*price)
                    }
                    axios.put('http://localhost:8000/api/Cart/' + product._id, update)
                    history.push('/cart')
                    window.location.reload()
                }
            }if(flag==false){
                const cartItem = {
                    productId: item.productId,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    totalPrice: totalPrice,
                    quantity: quantity,
                }
                axios.post('http://localhost:8000/api/Cart', cartItem)
                    .then(res => {
                        history.push('/cart')
                        console.log("added to cart")
                    })
                    console.log('else if add statement executed')
            }            
        }  
    }
    
        
        return (
            <div>
                <div style={{ display: 'flex', marginLeft: '15%', height: '30px' }}>
                    <h3 ><Link className="hover" to={`/${cat}`} style={{ textDecoration: 'none', color: 'orange' }}>{cat}, </Link><Link to={`/${link}/${cat}/${type}/${link}`} style={{ textDecoration: 'none', color: 'cornflowerblue' }} className="hover01"  >{type}, </Link> {item.name}</h3>
                </div>
                <div style={{ backgroundColor: "cornflowerblue", height: '300px', marginTop: '40px' }}>
                    <div className="flex" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div>
                            <img src={item.image} alt="item" style={{ height: '220px', width: '250px', borderRadius: '50%', marginTop: "50px", marginLeft: '-40px' }} />
                        </div>
                        <div>
                            <h2 style={{ color: 'white', textAlign: 'right' }}>{item.name}</h2>
                            <p style={{ textAlign: 'right' }}>Calories {item.calories}</p>
                            <br />
                            <br />{
                                item.price?
                                <p style={{ textAlign: 'right', color: 'white' }}>${item.price.toFixed(2)}</p>
                                :
                                ''
                            }
                        </div>
                    </div>
                </div>
                <div className="flex" style={{ justifyContent: "space-around", marginTop: '40px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: ' 700px', marginLeft: '15%' }}>
                        <p>{item.description}</p>
                        <div className='flex' style={{ justifyContent: 'center' }}>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <a className="bn39" style={{ marginRight: '20px' }} ><span className="bn39span"><h6>Continue Browsing</h6></span></a>
                            </Link>
                            <Link to='/cart' style={{ textDecoration: 'none' }}>
                                <a className="bn39" style={{ marginLeft: '20px' }} ><span className="bn39span"><h6>Shopping Cart</h6></span></a>
                            </Link>
                        </div>
                    </div>
                    <div style={{ marginRight: '5%' }}>
                        <h4>Nutritional Information</h4>
                        <p>Nutritional information is based on the standard recipe.</p>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <li style={{marginRight:'10px',listStyle:'none'}} >Serving Size</li>
                            <p style={{color:'cornflowerblue'}}>16 fl oz</p>
                            </div>
                        <hr />
                        <div style={{ listStyle: 'none'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                            <li style={{marginRight:'10px'}} >Calories </li>
                            <p style={{color:'cornflowerblue'}}>{item.calories}</p>
                            </div>
                            <hr />
                            <div style={{display:'flex', alignItems:'center'}}>
                            <li style={{marginRight:'10px'}} >Total Fat</li>
                            <p style={{color:'cornflowerblue'}}>{item.totalFat}</p>
                            </div>
                            <hr />
                            <div style={{display:'flex', alignItems:'center'}}>
                            <li style={{marginRight:'10px'}} >Total Carbohydrates</li>
                            <p style={{color:'cornflowerblue'}}>{item.totalCarb}</p>
                            </div>
                            <hr />
                            <div style={{display:'flex', alignItems:'center'}}>
                            <li style={{marginRight:'10px'}} >Total Protein</li>
                            <p style={{color:'cornflowerblue'}}>{item.protein}</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={submit}>
                        <div style={{ marginTop: '20px', marginLeft: '71%' }}>
                            <label >Amount </label>
                            <input type="number" min='1' max='1000' style={{ width: '30px' }} onChange={e => setQuantity(e.target.value)} value={quantity} />
                            <p>Total $ {totalPrice.toFixed(2)}</p>
                            <a className="bn39" style={{ marginRight: '20px' }} onClick={(e) => submit(e)}><span className="bn39span"><h6>Add to Cart</h6></span></a>

                        </div>
                    </form>

                </div>
            </div>
        )
    }
    export default OneItem


   