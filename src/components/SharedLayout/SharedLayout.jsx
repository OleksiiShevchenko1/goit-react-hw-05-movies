import { Outlet } from 'react-router-dom';
import { Section, Header, NavLinkStyled } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Section>
      <Header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>

      <Outlet />
    </Section>
  );
};

export default SharedLayout;
