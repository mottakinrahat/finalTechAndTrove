import { Box, Stack, Toolbar } from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import Link from "next/link";
const Sidebar = () => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Smart Watch",
          "Earbuds",
          "headphone",
          "Earphone",
          "Mouse",
          "keyboard",
          "Bluetooth Speaker",
          "webcam",
          "security Camera",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Order"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box>
      <Stack direction="row" justifyContent="center" alignItems="center" pt={6}>
        {" "}
        <Link href="/" style={{ cursor: "pointer" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://i.ibb.co/F5WvHLr/TNT-Logo-9.png"
              height={80}
              width={80}
              alt="alternative"
            ></Image>
            <Image
              src="https://i.ibb.co/qDMb5yb/whitebg.png"
              height={100}
              width={100}
              alt="alternative"
            ></Image>
          </Box>
        </Link>
      </Stack>
      {drawer}
    </Box>
  );
};

export default Sidebar;
