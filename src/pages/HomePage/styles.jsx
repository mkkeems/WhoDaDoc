import { styled } from 'styled-components';
import theme from '../../styles/theme';

export const SectionWrap = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightOrange};

  &.white {
    background-color: white;
  }
`;

export const SectionContent = styled.div`
  padding: 200px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: auto;

  h1 {
    margin-bottom: 40px;
  }
`;

export const TestimonialWrap = styled.div`
  padding: 100px 0 0;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  justify-content: space-evenly;

  .center-text {
    width: 30%;
    p {
      margin: 20px 0px;
    }
    text-align: center;
  }
`;
