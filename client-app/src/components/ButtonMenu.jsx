import React, { useState } from 'react';
import { FaAlignRight } from "react-icons/fa";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MenuItem = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle >
            <FaAlignRight/>
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
        <a href="https://www.instagram.com/pauloigorms/" className="link-dark no-line" target="_blank" rel="noopener noreferrer">@pauloigorms</a>
        </DropdownItem>
        <DropdownItem divider />    
        <DropdownItem>
            <a href="/" className="link-dark no-line">@about</a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MenuItem;