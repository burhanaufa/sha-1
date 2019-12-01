import React from 'react';
import styled from 'styled-components';

// import { ReactComponent as Avatar } from '../../icons/avatar.svg';
// import { ReactComponent as Compass } from '../../icons/compass.svg';


const Nav = styled.div`
  width: 370px;
  margin: auto;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const MenuLink = styled.a``;
function Header() {
  return (
    <Nav>
        Alamat Pengantaran
              <p>Tokopedia Tower</p>
           
     </Nav>
  );
}
export default Header;