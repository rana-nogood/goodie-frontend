import React from "react";
import { Toolbar, IconButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import H1Icon from "../../../../../CommonComponents/customIcons/H1Icon";
import H2Icon from "../../../../../CommonComponents/customIcons/H2Icon";
import H3Icon from "../../../../../CommonComponents/customIcons/H3Icon";
import PIcon from "../../../../../CommonComponents/customIcons/PIcon";

const customToolbar = () => (
  <Toolbar
    id="toolbar"
    sx={{
      justifyContent: "flex-start",
      padding: "10px",
      backgroundColor: "#F6F6F6",
      borderBottom: "1px solid #E1E1E1 !important",
    }}
  >
    <IconButton value="1" className="ql-header">
      <H1Icon />
    </IconButton>
    <IconButton value="2" className="ql-header">
      <H2Icon />
    </IconButton>
    <IconButton value="3" className="ql-header">
      <H3Icon />
    </IconButton>
    <IconButton value="" className="ql-header">
      <PIcon />
    </IconButton>
    <IconButton className="ql-bold">
      <FormatBoldIcon />
    </IconButton>
    <IconButton value="bullet" className="ql-list">
      <FormatListBulletedIcon />
    </IconButton>
  </Toolbar>
);

export default customToolbar;
