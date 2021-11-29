import '../App.css';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Cart = (props) => {
    const [cart, setCart] = useState([])
    const [grandTotal, setGrandTotal] = useState('')
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Cart`)
            .then(res => {
                setCart(res.data.items)
            })
    }, [])

    const minusQty = (id, item) => {
        const minus = {
            quantity: item.quantity - 1,
            totalPrice: Math.round((item.totalPrice -= item.price) * 100) / 100
        }
        if (item.quantity === 1) {
            axios.delete('http://localhost:8000/api/Cart/' + id)
            window.location.reload()
        }
        axios.put('http://localhost:8000/api/Cart/' + id, minus)
        window.location.reload()
    }
    const addQty = (id, item) => {
        const add = {
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice += item.price
        }
        axios.put('http://localhost:8000/api/Cart/' + id, add)
        window.location.reload()
        // history.push('/cart')


    }
    const remove = (id) => {
        axios.delete('http://localhost:8000/api/Cart/' + id)
        window.location.reload()
    }
    const total = () => {

        let gTotal = 0
        for (const item of cart) {
            
            gTotal = gTotal += item.totalPrice
        }
        setGrandTotal(gTotal)

    }



    return (
        <div className='flex'>
            <div style={{ marginRight: '3%', width: '70%' }}>
                <div className="flex" style={{ marginLeft: '5%' }}>
                    <p style={{ width: '200px', textAlign: 'center' }}>Product</p>
                    <p style={{ width: '50px', marginLeft: '10%', textAlign: 'center' }}>Price</p>
                    <p style={{ width: '50px', marginLeft: '15%', textAlign: 'center' }}>Qty</p>
                    <p style={{ width: '50px', marginLeft: '20%', textAlign: 'center' }}>Total</p>
                </div>
                <hr style={{ marginLeft: '5%' }} />
                {!cart[0] ? <Link to='/' style={{ textDecoration: 'none' }}><a className="bn39" style={{ marginLeft: '45%', marginTop: '10%' }}><span className="bn39span"><h6>Your Cart is Empty</h6></span></a></Link> :

                    <div style={{ marginLeft: '5%', alignContent: 'center' }}>
                        {cart.map((item, idx) => (
                            <div>
                                <div key={idx} className="flex" style={{ alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                                    <div style={{ width: '200px', textAlign: 'center' }}>
                                        <img src={item.image} alt="item" style={{ height: '100px', width: '115px', borderRadius: '50%' }} />
                                        <p>{item.name}</p>
                                    </div>
                                    <p style={{ width: '50px', marginLeft: '10%', textAlign: 'center', color:'cornflowerblue' }}>${item.price.toFixed(2)}</p>
                                    <p style={{ width: '50px', marginLeft: '15%', textAlign: 'center', display: 'flex' , color:'cornflowerblue'}}> <button className='shrink2' style={{ marginRight: '10px', height: '20px', border:'0px',borderRadius:'5px'}} onClick={() => minusQty(item._id, item)}>-</button>{item.quantity} <button className="grow3" style={{ marginLeft: '10px', height: '20px',border:'0px',borderRadius:'5px'}} onClick={() => addQty(item._id, item)}>+</button> </p>
                                    <p style={{ width: '50px', marginLeft: '20%', textAlign: 'center' }}>${item.totalPrice.toFixed(2)}</p>
                                    <button  style={{ marginLeft: '50px', height: '20px',border:'0px',borderRadius:'5px' }} onClick={() => remove(item._id, item)} className='grow2'>Remove</button>
                                </div>
                                <hr />
                            </div>
                        )
                        )}
                    </div>
                }
            </div>
            <div>
                <div style={{ backgroundColor: 'cornflowerblue', height: '100%', width: '400px' }}>
                    <div style={{ marginLeft: '13%', padding: '20%', width: '150px', textAlign: 'center' }}>
                        <h3 style={{color:'white'}}>{grandTotal == '' ? "" : 'Grand Total $' + grandTotal.toFixed(2)}</h3>
                        <button className='bn39' style={{ border: '0px' }} onClick={() => total()}><span className='bn39span'><h6>CHECKOUT</h6></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
