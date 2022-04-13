import React, { useState} from 'react'
import { BasePage } from '../../component/base-page'
import { useNavigate } from 'react-router-dom'
import styles from './shopping.module.css';
import { useMyContext } from '../../context/my-context';





export const Shopping = () => {
    const navigate = useNavigate()

    const { myState} = useMyContext();

    const [num, setNum] = useState(myState.products.map(item => 1));

    const incrementCount = (index) => {
        num[index]++;
        setNum([...num]);

    };

    const decrementCount = (index) => {
        if (num[index] > 1) {
            num[index]--;
            setNum([...num]);
        } else {
            num[index] = 1;
            setNum([...num]);
        }
    };

    return (
        <BasePage title="سبد خرید شما">
            <div><button className="btn btn-secondary mt-0 mb-2" onClick={() => {
                navigate('/store')
            }
            }>برگشت به فروشگاه</button></div>
            <div className={styles['users-table']}>
                <div className={styles['table-row']}>
                    <div className={`${styles['data']} ${styles['title']}`}>عکس</div>
                    <div className={`${styles['data']} ${styles['title']}`}>نام کالا</div>
                    <div className={`${styles['data']} ${styles['title']}`}>قیمت واحد</div>
                    <div className={`${styles['data']} ${styles['title']}`}>تعداد</div>
                    <div className={`${styles['data']} ${styles['title']}`}>قیمت نهایی</div>
                    <div className={`${styles['data']} ${styles['title']}`}>حذف کالا</div>
                </div>
                {myState.products.length > 0 ? (
                    myState.products.map((product, i) => (
                        <div key={i} className={styles['table-row']}>
                            <div className={styles['data']}>
                                <img src={product.image} alt='img' className="image-fluid" width='120' height='120' />
                            </div>
                            <div className={styles['data']}>{product.title}-{product.category}</div>
                            <div className={styles['data']}>{product.price} تومان</div>
                            <div className={styles['data']}>
                                <button className={styles['icon-button']} onClick={() => {
                                    incrementCount(i)
                               
                                }}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                {num[i]}
                                <button className={styles['icon-button']} onClick={() => {
                                    decrementCount(i) }}>
                                    <i className="fa fa-minus"></i>
                                </button>

                            </div>
                            <div className={styles['data']}>{product.price * num[i]} تومان</div>
                            <div className={styles['data']}>
                                <button className={styles['icon-button']}>
                                    <span className='fa fa-close'></span>
                                </button>
                            </div>

                        </div>

                    ))

                ) : (
                    <div className={styles['empty-table']}>سبد خرید شما خالی است</div>
                )}

            </div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    جمع کل:{num}
                    <button className="btn btn-success m-3">ثبت و مرحله پرداخت</button>
                </div>
            </div>
        </BasePage>
    )
}
