import React from 'react';
import './Writer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Writer = (props) => {
    const { Name, img, Age, bestSellers, booksNumber } = props.value;
    const card = { width: '20rem' };
    const element = <FontAwesomeIcon icon={faCartShopping} />

    return (
        <div className="card bg-success p-2 text-dark bg-opacity-50" style={card}>
            <div className="card-body">
                <img className='image' src={img} alt="" />
                <h3 className="card-title">{Name}</h3>
                <h4 className="card-title">Age:{Age}</h4>
                <h6 className="card-title">Book Numbers:{booksNumber}</h6>
                <p className="card-text">{bestSellers}</p>
                <button onClick={() => props.addToCart(props.value)} className='btn'>{element}Add Books</button>
            </div>
        </div>
    );
};

export default Writer;