import { styled } from 'styled-components';
import theme from '../../styles/theme';

export const TopSectionWrap = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightOrange};
`;

export const SectionContent = styled.div`
  padding: 200px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`;
