import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme, useMediaQuery } from "@mui/material";

export default function TemporaryDrawer({ children }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 220 }}>
      <List>
        {[
          "Hardware",
          "Periféricos",
          "Computadores",
          "Games",
          "Celular & Smartphone",
          "Celular & Telefone",
          "TV",
          "Áudio",
          "Projetores",
          "Espaço Gamer",
          "Escritório",
          "Casa Inteligente",
          "Câmeras e Drones",
          "Energia",
          "Conectividade",
          "Geek",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={open} variant={smDown ? "temporary" : "permanent"}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Button onClick={toggleDrawer(true)}>Open drawer</Button>
          {DrawerList}
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
