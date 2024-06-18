import './Products.css'
import products from '../../data/products'
// Components
import ProductItem from '../product-item/ProductItem'

const Products = () => {
    return (
        <section id='products'>
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </section>
    )
}

export default Products