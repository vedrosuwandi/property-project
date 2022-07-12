import React from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from '@mui/material';

function NavbarMenu({anchorEl, menuList, open, onClose}) {
    return (
        <div style={{display: open ? "block" : "none"}}>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={onClose}
                anchorEl={anchorEl}
                // MenuListProps={{onMouseLeave : onClose}}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
            >
                {/* {console.log(open)} */}
                {
                    menuList.map((list, index)=>{
                        return(
                            <div>
                                <MenuItem key={index}>{list}</MenuItem>
                                {index === menuList.length - 1 ? "" : <Divider />}
                            </div>
                        )
                    })
                }
                
            </Menu>
        </div>
    );
}

export default NavbarMenu;