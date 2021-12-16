import { FC } from "react"
//! Components
import Button from "@material-ui/core/Button"
//! Types
import { CURRENCIES, ItemProps } from "../utils"
//! Styles
import { Wrapper } from "./Item.styles"

const Item: FC<ItemProps> = ({
  item,
  handleAddToCart,
}: ItemProps): JSX.Element => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} key={item.id} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>₹{(item.price * CURRENCIES.rupees).toFixed(2)}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
  )
}

export default Item
