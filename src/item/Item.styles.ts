import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  width: 100%;
  height: 100%;
  border: 1px solid #333;
  box-shadow: 0 0 10px #333;
  border-radius: 20px;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  button {
    border-radius: 0 0 20px 20px;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    pointer-events: none;
    user-select: none;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`
