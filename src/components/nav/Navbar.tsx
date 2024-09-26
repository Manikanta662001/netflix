import React from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";

const Navbar: React.FC<{}> = (): JSX.Element => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionClick = () => {
    navigate("/login");
    handleClose();
  };
  return (
    <ul className="flex justify-around py-[10px] items-center">
      <li className="text-3xl font-bold text-header-color sm:ml-[-80px] xs:ml-[0px] md:text-5xl">
        NETFLIX
      </li>
      <li className="xs:hidden sm:inline">
        <select
          name=""
          id=""
          className="w-[120px] bg-dark-grey text-white px-[20px] py-[5px] mr-[10px] rounded-md"
        >
          <option value="English">English</option>
        </select>
        <button
          className="bg-header-color text-white px-[20px] py-[5px] rounded-md hover:bg-header-hover"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </li>
      <li className="xs:inline sm:hidden hover:cursor-pointer">
        <IconButton onClick={handleClick}>
          <MoreVertIcon className="text-white" id="basic-button" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleOptionClick()}>Sign In</MenuItem>
        </Menu>
      </li>
    </ul>
  );
};

export default Navbar;
