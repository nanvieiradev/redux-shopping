import './CartItem.css'

import { useDispatch } from 'react-redux'
// Icons
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { MdDeleteOutline, MdDeleteForever } from 'react-icons/md'
// Actions
import {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
} from '../../redux/cart/actions'

const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemoveClick = () => dispatch(removeProductFromCart(product))

    const handleIncreaseClick = () => dispatch(increaseProductQuantity(product))

    const handleDecreaseClick = () => dispatch(decreaseProductQuantity(product))

    return (
        <div className='cartItem'>
            <img src={product.imageUrl} alt={product.name} title={product.name} />
            <div className='cartItemControls'>
                <div className="cartItemInfo">
                    <p className='productName'>{product.name}</p>
                    <p className='productPrice'>R$ {product.price}</p>
                </div>
                <div className="cartQuantityItem">
                    <button onClick={handleDecreaseClick}><IoMdRemove /></button>
                    <p className='itemQuantity'>{product.quantity}</p>
                    <button onClick={handleIncreaseClick}><IoMdAdd /></button>
                </div>
            </div>
            <button className='deleteBtn' onClick={handleRemoveClick}><MdDeleteOutline className='mdDeleteOutline' /><MdDeleteForever className='mdDelete' /></button>
        </div>
    )
}

export default CartItem