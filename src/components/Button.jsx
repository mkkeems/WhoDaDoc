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
    &:hover {
      background-color: white;
      border: 2px solid ${theme.colors.orange};

      .search-icon {
        color: ${theme.colors.orange};
      }
    }
  }
  &.buttonForInfo {
    border: 2px solid ${theme.colors.orange};
    background-color: white;
    padding: 6px 18px;
    border-radius: 30px;
    color: ${theme.colors.orange};
    font-size: 16px;
    font-weight: 700;
    min-width: fit-content;

    &:hover {
      background-color: ${theme.colors.orange};
      color: white;
    }

    &.bookNow {
      margin: auto;
    }
  }

  &.orangeButton {
    border: 2px solid ${theme.colors.orange};
    padding: 6px 18px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 700;
    min-width: fit-content;

    background-color: ${theme.colors.orange};
    color: white;
    &:hover {
      color: ${theme.colors.orange};
      background-color: white;
    }

    &.bookNow {
      margin: auto;
    }
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
