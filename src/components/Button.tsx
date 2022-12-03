import styled from "styled-components";

interface IButtonProps {
  is: string;
}

const Button = styled.button<IButtonProps>(({ is }) => ({
  background: "red",
}));

export default Button;
