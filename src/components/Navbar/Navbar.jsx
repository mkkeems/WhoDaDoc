import { styled } from 'styled-components';
import docIcon from '../../assets/doc-icon1.png';
import docText from '../../assets/doc-text1.png';
import theme from '../../styles/theme';
import { useLocation } from 'react-router-dom';

const NavBarWrap = styled.div`
  width: 100vw;
  padding: 15px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${theme.colors.grey};
`;

const LogoWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  .logo {
    width: 34px;
    height: auto;
  }
  .logo-text {
    /* width: 120px; */
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <NavBarWrap>
      <LogoWrap>
        <img src={docIcon} alt="logo" className="logo" />
        {location.pathname === '/' && (
          <img src={docText} alt="logo-text" className="logo-text" />
        )}
      </LogoWrap>
    </NavBarWrap>
  );
};

export default Navbar;
