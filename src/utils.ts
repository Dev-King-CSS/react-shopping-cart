//! The API structure's vital type
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

//* Component props here
export type ItemProps = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
}

export type CartProps = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

export type CartItemProps = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

//* Enum of currencies (use if you want to use different currency)
export enum CURRENCIES {
  //* Not added dollars as it's the default
  rupees = 79.09,
  won = 1183.5,
  yen = 114.14,
  lira = 15.18,
  pound = 0.75,
  franc = 0.92,
  euro = 0.88,
  rand = 15.98,
}
