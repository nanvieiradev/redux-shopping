import './Header.css'

import Cart from '../cart/Cart'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Actions
import { loginUser, logoutUser } from '../../redux/user/actions'
// Selectors
import { selectProductsCount } from '../../redux/cart/cart.selectors'

const Header = () => {
    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

    const productsCount = useSelector(selectProductsCount)

    const dispatch = useDispatch()

    const [isCartVisible, setIsCartVisible] = useState(false)    

    const handleLoginClick = () => {
        dispatch(loginUser({ name: 'Renan', email: 'nanvieiradev@gmail.com' }))
    }

    const handleLogoutClick = () => {
        dispatch(logoutUser())
    }

    const handleCartClick = () => {
        setIsCartVisible(prevState => !prevState)
    }

    const handleCloseCart = () => {
        setIsCartVisible(false)
    }

    return (
        <header>
            <h2>Redux Shopping</h2>
            <nav>
                <ul>
                    <li>
                        {currentUser ?
                            (<button onClick={handleLogoutClick}>Sair</button>)
                            :
                            (<button onClick={handleLoginClick}>Login</button>)}
                    </li>
                    <li><button onClick={handleCartClick}>Carrinho ({productsCount})</button></li>
                </ul>
            </nav>
            {isCartVisible && <Cart onClose={handleCloseCart} />}
        </header >
    )
}

export default Header