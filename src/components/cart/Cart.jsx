import './Cart.css'
// Icons
import { IoClose } from 'react-icons/io5'
// Components
import CartItem from '../cart-item/CartItem'
// Hooks
import { useSelector } from 'react-redux'
// Selectors
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors'

const Cart = ({ onClose }) => {
    const handleCloseCart = () => {
        onClose()
    }

    const handleCartClick = (e) => {
        e.stopPropagation()
    }

    const { products } = useSelector(rootReducer => rootReducer.cartReducer)
    const productsTotalPrice = useSelector(selectProductsTotalPrice)

    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

    return (
        <div id='cart-overlay' onClick={handleCloseCart}>
            <div id="cart" onClick={handleCartClick}>
                <div id="cart-header">
                    <h2>Seu Carrinho</h2>
                    <button onClick={handleCloseCart}><IoClose /></button>
                </div>
                <div id="cart-products">
                    {products.map(product =>
                        <CartItem product={product} key={product.id} />)}
                </div>
                <div id="cart-footer">
                    <h2>Total: R$ {productsTotalPrice}</h2>
                    <button
                        id='checkout-cart-btn'
                        style={{ cursor: currentUser ? 'pointer' : 'not-allowed' }}
                        className={currentUser ? '' : 'disabled'}>Finalizar</button>
                </div>
            </div>
        </div >
    )
}

export default Cart