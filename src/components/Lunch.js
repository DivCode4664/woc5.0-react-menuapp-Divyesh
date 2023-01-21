import React from 'react'
import Fooditem from './Fooditem'
import { useContext } from 'react'
import { Appcontext } from '../App'
import { Link } from 'react-router-dom'
const items = [
    {
        "id": "1",
        "itemname": "Poha",
        "itemimage": "./poha.jpg",
        "price": "20"
    },
    {
        "id": "2",
        "itemname": "Samosa",
        "itemimage": "./samosa.jpg",
        "price": "20"
    },
    {
        "id": "3",
        "itemname": "Idli",
        "itemimage": "./Idli.jpg",
        "price": "30"
    },
    {
        "id": "4",
        "itemname": "Upma",
        "itemimage": "./upma.jpg",
        "price": "30"
    },
    {
        "id": "5",
        "itemname": "Khaman",
        "itemimage": "./khaman.jpg",
        "price": "10"
    },
    {
        "id": "6",
        "itemname": "Tea with Tost",
        "itemimage": "./chai-tost.jpg",
        "price": "20"
    }
]
export default function Lunch() {
    const {SetDisplayHome} = useContext(Appcontext);
    return (
        <div>
            <div className="container">
            <h1 className='text-center' style={{ margin: '25px 0px' }}>Lunch</h1>
                <div className="row">
                    {items.map((element) => {
                        return element.id && <div className="col-md-4" key={element.id}>
                            <Fooditem title={element.itemname ? element.itemname : ""} imageurl={element.itemimage} price={element.price} />
                        </div>
                    })}
                </div>
                <Link className="nav-link active " to="/frontpage"><button className='btn btn-dark' onClick={() => {SetDisplayHome(true)}}>Back</button></Link>
            </div>
        </div>
    )
}
