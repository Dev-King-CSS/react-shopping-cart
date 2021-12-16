import { FC } from "react"
import CartItem from "../cartItem/CartItem"
//! Styles
import { Wrapper } from "./Cart.styles"
//! Types
import { CartItemType } from "../utils"

type CartProps = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart: FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}: CartProps): JSX.Element => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items to check!</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  )
}

export default Cart
