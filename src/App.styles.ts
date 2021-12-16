import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton"

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
`
