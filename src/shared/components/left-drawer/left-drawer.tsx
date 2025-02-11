import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function TemporaryDrawer({ children }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(!smDown); // Mantém aberto em telas maiores

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Sobre Nós", path: "/about" },
    { text: "Hardware", path: "/category/hardware" },
    { text: "Periféricos", path: "/category/perifericos" },
    { text: "Notebooks", path: "/category/notebooks" },
    { text: "Desktops", path: "/category/desktops" },
    { text: "Monitores", path: "/category/monitores" },
    { text: "Componentes", path: "/category/componentes" },
    { text: "Placas de Vídeo", path: "/category/placas-de-video" },
    { text: "Processadores", path: "/category/processadores" },
    { text: "Memória RAM", path: "/category/memoria-ram" },
    { text: "Armazenamento", path: "/category/armazenamento" },
    { text: "Rede", path: "/category/rede" },
    { text: "Smartphones", path: "/category/smartphones" },
    { text: "Tablets", path: "/category/tablets" },
    { text: "Gaming", path: "/category/gaming" },
    { text: "Acessórios", path: "/category/acessorios" },
    { text: "Promoções", path: "/category/promocoes" },
    { text: "Novidades", path: "/category/novidades" },
    { text: "Contato", path: "/contact" },
    // Adicione mais itens aqui conforme necessário
  ];

  const DrawerList = (
    <Box sx={{ width: 220 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={smDown ? toggleDrawer(false) : undefined} // Fecha o drawer em telas menores
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        variant={smDown ? "temporary" : "permanent"}
        sx={{
          "& .MuiDrawer-paper": {
            width: theme.spacing(28),
            boxSizing: "border-box",
          },
        }}
      >
        {DrawerList}
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          ml: smDown ? 0 : theme.spacing(28), // Ajusta o conteúdo ao drawer
          p: 2,
        }}
      >
        {children}
        {smDown && (
          <Button
            variant="contained"
            onClick={toggleDrawer(true)}
            sx={{ position: "fixed", top: 16, left: 16 }}
          >
            Menu
          </Button>
        )}
      </Box>
    </>
  );
}
