import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({product}) => {
    return (
     
        <div key={product.id} className="product user-table card shadow" style={{direction:"ltr"}}>
        <Link to={`detail/${product.id}`}>
          <div className="text-center">
            <img src={product.image} alt='img' className="image-fluid" width='250' height='250' />
          </div>
          <h5 className="cut-text card-header bg-secondary text-light text-center">{product.title}</h5>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">{product.price} تومان </li>
            <li className="list-group-item"> {product.category}</li>
            <li className="cut-text list-group-item"> {product.description}</li>
          </ul>
          <button className="btn btn-secondary btn-block">نمایش جزئیات
          </button>
        </Link>
      </div>
    )
};
