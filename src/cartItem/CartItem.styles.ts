import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #00aaff;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .buttons button {
    font-size: 1.5rem;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`
