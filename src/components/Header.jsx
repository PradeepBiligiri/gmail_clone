import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import { Menu as MenuIcon, Search, Tune } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { gmailLogo } from "../constants/constant";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledAppBar = styled(AppBar)({
  background: "#F5f5f5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: 80,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  borderRadius: 20,
  background: "#eaf1fb",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 5px",
  },
});

const OptionWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  "& > svg": {
    marginLeft: 20,
    fontSize: 30,
  },
});

function header() {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" />
          <img
            src={gmailLogo}
            alt="Gmail Logo"
            style={{ width: 110, marginLeft: 15 }}
          />
          <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search mail" />
            <Tune color="action" />
          </SearchWrapper>
          <OptionWrapper>
            <HelpOutlineIcon color="action" />
            <SettingsIcon color="action" />
            <AppsOutlinedIcon color="action" />
            <AccountCircleOutlinedIcon color="action" />
          </OptionWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default header;
