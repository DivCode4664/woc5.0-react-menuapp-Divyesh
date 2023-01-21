import React from 'react'
import breakfast from './breakfast.jpg'
import lunch from './lunch.jpg'
import dinner from './dinner.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Appcontext } from '../App'
export default function Option() {
    const {SetDisplayHome} = useContext(Appcontext);
    return (
        <div className="option" style={{display: 'grid'}}>
            <div className="food-items">
                <img src={breakfast} alt='...' />
                <div className="details">
                    <div className="details-sub">
                        <h2>Breakfast</h2>
                    </div>
                    <Link className="nav-link active" to="/breakfast"><button className='btn btn-dark' onClick={() => SetDisplayHome(false)}>Order</button></Link>
                </div>
            </div>
            <div className="food-items">
                <img src={lunch} alt='...'/>
                <div className="details">
                    <div className="details-sub">
                        <h2>Lunch</h2>
                    </div>
                    <Link className="nav-link active" to="/lunch"><button className='btn btn-dark' onClick={() => SetDisplayHome(false)}>Order</button></Link>
                </div>
            </div>
            <div className="food-items">
                <img src={dinner} alt='...' />
                <div className="details">
                    <div className="details-sub">
                        <h2>Dinner</h2>
                    </div>
                    <Link className="nav-link active" to="/dinner"><button className='btn btn-dark' onClick={() => SetDisplayHome(false)}>Order</button></Link>
                </div>
            </div>
        </div>
    )
}
