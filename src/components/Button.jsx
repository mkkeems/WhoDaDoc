import { styled } from 'styled-components';
import theme from '../styles/theme';

const StyledButton = styled.button`
  &:hover {
    cursor: pointer;
  }

  &.submit {
    background-color: ${theme.colors.orange};
    padding: 14px 44px;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.02em;
  }

  &.search-icon-btn {
  }
`;

const Button = ({ onClick, type, className, children }) => {
  return (
    <StyledButton
      className={className ? className : ''}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
