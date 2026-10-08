// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalOrderPrice = 0
      cartList.forEach(eachCartItem => {
        totalOrderPrice += eachCartItem.price * eachCartItem.quantity
      })

      const totalItemsCount = cartList.length

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            <span className="order-total-label">Order Total:</span> Rs{' '}
            {totalOrderPrice}/-
          </h1>
          <p className="items-count-text">{totalItemsCount} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
