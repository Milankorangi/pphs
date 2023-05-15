import * as React from "react";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MuiButton from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

const DropButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    background: "transparent",
  },
}));

const Button = styled(MuiButton)(({ theme }) => ({
  "&:hover": {
    color: "#0C134F",
  },
}));

const pages = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "/my-account",
    name: "My Account",
  },
  {
    id: 3,
    link: "/contact",
    name: "Contact",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenu = (link) => {
    navigate(link);
    setAnchorElNav(null);
  };

  const handleMyAccount = (link) => {
    navigate(link);
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "left", vertical: "top" }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page?.id}
                  onClick={() => handleMobileMenu(page?.link)}
                >
                  <Typography textAlign="center">{page?.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page?.id}
                disableRipple
                onClick={() => navigate(page?.link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page?.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <DropButton
              disableRipple
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                "&:hover": {
                  "& .MuiTypography-root": {
                    color: "#0C134F",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#0C134F",
                  },
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                Jhon Doe
              </Typography>

              <KeyboardArrowDownIcon
                sx={{
                  display: { xs: "flex" },
                  color: "#fff",
                  ml: 1,
                  "&:hover": {
                    color: "#0C134F",
                  },
                }}
              />
            </DropButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={() => handleMyAccount("/my-account")}
              sx={{ mr: { xs: 2, md: 4 } }}
            >
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleLogOut()}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
