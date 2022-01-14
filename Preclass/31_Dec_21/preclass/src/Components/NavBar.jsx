import styled from "styled-components";

const NavBarWrapper = styled.header`
position: relative;
  height: 120px;
  border: 2px yellow solid;
  background-color: aqua;
`;

const Logo = styled.div`
position: absolute;
  height: 60px;
  top: 24px;
  left: 30px
`;

const ResourceLinks = styled.div`
  font-weight: 300;
  position: absolute;
  top: 24px;
  right: 30px;
  letter-spacing: 2px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
`;

const A = styled.a`
  text-decoration: none;
  margin-left: 30px;
  cursor: pointer;
  color: red;
  font-weight: 700
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img
          src="https://www.masaischool.com/img/navbar/logo.svg"
          height="70px"
          width="150px"
          alt=""
        />
      </Logo>
      <ResourceLinks>
        <Button>Try Now</Button>
        <A>About Us</A>
        <A>GAQ</A>
        <A>Login</A>
      </ResourceLinks>
    </NavBarWrapper>
  );
}

export default NavBar;
