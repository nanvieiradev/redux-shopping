import './ProductItem.css'
// Icons
import { BsCartPlus } from 'react-icons/bs'
// Hooks
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// Actions
import { addProductToCart } from '../../redux/cart/actions'

import { Alert, Fade } from '@mui/material'

const ProductItem = ({ product }) => {
    const [alertActive, setAlertActive] = useState(false)
    const [alertTimer, setAlertTimer] = useState(null)

    const dispatch = useDispatch()

    const handleAddToCartClick = () => {
        dispatch(addProductToCart(product))
        setAlertActive(true)

        if (alertTimer) {
            clearTimeout(alertTimer)
        }

        const timer = setTimeout(() => {
            setAlertActive(false)
            console.log('Alert deactivated')
        }, 3000)

        setAlertTimer(timer)
    }

    useEffect(() => {
        return () => {
            if (alertTimer) {
                clearTimeout(alertTimer)
            }
        }
    }, [alertTimer])


    return (
        <div className='card'>
            <img src={product.imageUrl} alt={product.name} title={product.name} />
            <button onClick={handleAddToCartClick}><BsCartPlus />Adicionar ao carrinho</button>
            <div className="productInfo">
                <p>{product.name}</p>
                <p>R$ {product.price}</p>
            </div>
            {alertActive &&
                <Fade in className='alert-add-product-to-cart'>
                    <Alert severity='success'>
                        Seu produto foi adicionado ao carrinho.
                    </Alert>
                </Fade>}
        </div>
    )
}

export default ProductItem