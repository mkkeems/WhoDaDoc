import styled from 'styled-components';
import theme from '../../styles/theme';

export const SearchbarForm = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  border: 2px solid black;
  border-radius: 50px;
  padding: 2px 2px 2px 16px;
  gap: 2px;
  align-items: center;

  .search-filter {
    &__menu {
      margin-top: 0px;
    }
  }

  .search-icon-btn {
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background-color: ${theme.colors.orange};
    position: relative;
  }
  .search-icon {
    font-size: 24px;
    position: absolute;
    color: white;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }

  .bar {
    height: 24px;
    border-right: 1px solid black;
  }
`;
