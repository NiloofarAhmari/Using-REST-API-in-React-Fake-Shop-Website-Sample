import React, { useState, useEffect } from 'react'
import { BasePage } from './../../component/base-page/index';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { userAddToListAction } from '../../redux/actions';
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '../../context/my-context';
import { userAddToListAction } from '../../context/actions';

export const StoreDetail = () => {
    const navigate = useNavigate()
    const { dispatch } = useMyContext();
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState({
        id: 0,
        title: '',
        image: '',
        price: '',
        category: '',
        description: ''
    })

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(result => {
                // console.log(result)
                setProduct(result.data)
                setIsLoading(false)
            })
    }, [id])

    return (


        <BasePage title='جزئیات محصول' isLoading={isLoading}>
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt='img' className="image-fluid" width='250' height='250' />
                </div>

                <div className="col-md-8">
                    <h3>عنوان کالا : {product.title}</h3>


                    <p>{product.description}</p>
                    <h2 className="text-center">قیمت : {product.price} تومان</h2>
                    <button className="btn btn-secondary btn-block" onClick={() => {
                        dispatch(userAddToListAction(product))
                        navigate('/shopping')
                    }}>

                        اضافه به سبد خرید
                        <span className='fa fa-plus mr-1'></span>

                    </button>
                </div>
            </div>
        </BasePage>


    )
}
