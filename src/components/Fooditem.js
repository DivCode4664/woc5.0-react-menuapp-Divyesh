import React from 'react'

export default function Fooditem(props) {
    // let { title, imageurl, price } = this.props;
    //console.log(props.title)
    return (
        <div>
            <div className="my-2">
                <div className="card">
                    <img src={props.imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text" style={{fontSize: '35px'}}>{props.price}</p>
                        <button className="btn btn-outline-success">Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
