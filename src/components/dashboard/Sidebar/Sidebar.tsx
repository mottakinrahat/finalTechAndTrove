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
          { text: "Smart Watch", href: "/dashboard/admin/smart-watch" },
          { text: "Earbuds", href: "/dashboard/admin/earbuds" },
          { text: "Headphone", href: "/dashboard/admin/headphone" },
          { text: "Earphone", href: "/dashboard/admin/earphone" },
          { text: "Mouse", href: "/mouse" },
          { text: "Keyboard", href: "/keyboard" },
          { text: "Bluetooth Speaker", href: "/bluetooth-speaker" },
          { text: "Webcam", href: "/webcam" },
          { text: "Security Camera", href: "/security-camera" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.href} passHref>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{ text: "Order", href: "/order" }].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.href} passHref>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box>
      <Stack direction="row" justifyContent="center" alignItems="center" pt={6}>
        <Link href="/" style={{ cursor: "pointer" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://i.ibb.co/F5WvHLr/TNT-Logo-9.png"
              height={80}
              width={80}
              alt="TNT Logo"
            />
            <Image
              src="https://i.ibb.co/qDMb5yb/whitebg.png"
              height={100}
              width={100}
              alt="White Background"
            />
          </Box>
        </Link>
      </Stack>
      {drawer}
    </Box>
  );
};

export default Sidebar;
