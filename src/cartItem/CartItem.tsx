import { FC } from "react"
import Button from "@material-ui/core/Button"
//! Types
import { CartItemType, CURRENCIES } from "../utils"
//! Styles
import { Wrapper } from "./CartItem.styles"

type CartItemProps = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const CartItem: FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}: CartItemProps): JSX.Element => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ₹{item.price * CURRENCIES.rupees}</p>
        <p>
          Total: ₹
          {(item.amount * CURRENCIES.rupees * item.price).toFixed(2)}
        </p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
)

export default CartItem
