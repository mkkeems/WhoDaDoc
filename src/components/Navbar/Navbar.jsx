import { styled } from 'styled-components';
import docIcon from '../../assets/doc-icon1.png';
import docText from '../../assets/doc-text1.png';
import theme from '../../styles/theme';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SearchForm from '../../features/SearchForm/SearchForm';

const NavBarWrap = styled.div`
  width: 100%;
  padding: 15px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${theme.colors.grey};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  .logo {
    width: 34px;
    height: auto;
  }
  .logo-text {
    width: 140px;
  }
`;

const NavLinkWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavBarWrap>
      <LogoWrap onClick={() => navigate('/')}>
        <img src={docIcon} alt="logo" className="logo" />

        <img src={docText} alt="logo-text" className="logo-text" />
      </LogoWrap>
      <NavLinkWrap>
        {location.pathname === '/results' ? (
          <SearchForm />
        ) : (
          <StyledNavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            About
          </StyledNavLink>
        )}
      </NavLinkWrap>
    </NavBarWrap>
  );
};

export default Navbar;
