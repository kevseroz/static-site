import PropTypes from "prop-types"
import React, { useState } from "react"

import airplane from '../images/airplane.png'
import whiteAirplane from '../images/white-airplane.png'
import airplaneFull from '../images/airplaneFull.png'
import redAirplane from '../images/red-plane.png'
import redAirplaneOutline from '../images/red-plane-outline.png'
import earthPlane from '../images/earth-plane.png'
import earthPlaneOutline from '../images/earth-plane-outline.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

const Header = ({ siteTitle }, props) => {
  const [isOpen, setIsOpen ] = useState(false);

  const [show, updateIsOpen] = useState(false);


  const toggle = ({siteTitle}) => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <div className="container-fluid">
        <NavbarBrand href="/"><img src={airplane} alt="plane" className="header-png-size"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/galeri">Galeri</NavLink>
            </NavItem>

          <div className="drop-tog">
            <UncontrolledDropdown nav inNavbar
               {...props}
               onMouseOver={() => updateIsOpen(true)}         
               onMouseLeave={() => updateIsOpen(false)}
               toggle={() => updateIsOpen(!show)}
               isOpen={show}  >
              
              <NavItem  nav  >
              <NavLink href="/urunler">Ürünler</NavLink>
              </NavItem>
              <DropdownMenu >
                <DropdownItem href='/urunler/urun1'className="text-center" >
                  <div>
                  <input 
                  type="image" 
                  src={whiteAirplane} 
                  onMouseEnter={e => e.currentTarget.src = airplaneFull} 
                  onMouseLeave={e => e.currentTarget.src = whiteAirplane} 
                  alt="airplane" 
                  className="png-style"
                  />
                  </div>
                  Urun1
                </DropdownItem >
                <DropdownItem href='/urunler/urun2' className="text-center" >
                <div>
                <input 
                  type="image" 
                  src={redAirplaneOutline} 
                  onMouseEnter={e => e.currentTarget.src = redAirplane} 
                  onMouseLeave={e => e.currentTarget.src = redAirplaneOutline} 
                  alt="airplane" 
                  className="png-style"
                  />
                </div>
                  Urun2
                </DropdownItem>
                <DropdownItem href='/urunler/urun3' className="text-center">
                <div>
                <input 
                  type="image" 
                  src={earthPlaneOutline} 
                  onMouseEnter={e => e.currentTarget.src = earthPlane} 
                  onMouseLeave={e => e.currentTarget.src = earthPlaneOutline} 
                  alt="airplane" 
                  className="png-style"
                  />
                  </div>
                  Ürün3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </div>
              <NavItem  nav >
              <NavLink href="/hakkimizda">Kurumsal</NavLink>
              </NavItem>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
  }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
