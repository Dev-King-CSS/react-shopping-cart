import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"

export const Wrapper = styled.div`
  width: 99%;
  height: 100vh;
  margin-top: 50px;
`

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  top: 20px;
  right: 20px;

  &:hover {
    box-shadow: 0 0 10px transparent;
  }
`

export const CartIcon = styled(AddShoppingCartIcon)`
  outline: none;
  border-radius: 50%;
  color: black;
  &:hover {
    color: #00aaff;
    font-weight: 700;
  }
`
