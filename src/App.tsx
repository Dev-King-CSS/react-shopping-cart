import { useState } from "react"
import { useQuery } from "react-query"
//! Components
import Item from "./item/Item"
import Cart from "./cart/Cart"
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from "@material-ui/core/LinearProgress"
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import Badge from "@material-ui/core/Badge"
//! Styles
import { Wrapper, StyledButton } from "./App.styles"
//! Types
import { CartItemType } from "./utils"

//* Get Data from this function
const getProducts = async (): Promise<CartItemType[]> => {
  const URL = "https://fakestoreapi.com/products"
  return await (await fetch(URL)).json()
}

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  )

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item: CartItemType) => acc + item.amount, 0)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prevItems => {
      //1. Is the item already added in the cart
      const isItemInCart = prevItems.find(
        item => item.id === clickedItem.id
      )

      if (isItemInCart) {
        return prevItems.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }
      //First time the item is added
      const newlyAddedItem = [...prevItems, { ...clickedItem, amount: 1 }]
      return newlyAddedItem
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prevItems =>
      prevItems.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        } else return [...acc, item]
      }, [] as CartItemType[])
    )
  }

  if (isLoading) return <LinearProgress />
  if (error) return <h1>Something went wrong...</h1>

  return (
    <>
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartIsOpen}
          onClose={() => setCartIsOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartIsOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  )
}

export default App
