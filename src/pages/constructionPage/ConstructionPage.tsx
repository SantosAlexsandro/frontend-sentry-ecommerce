import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

const ConstructionPage: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <ConstructionIcon style={{ fontSize: 100, color: "#FF9800" }} />
      <Typography variant="h3" gutterBottom>
        Esta Página Está em Construção
      </Typography>
      <Typography variant="h5">
        Estamos trabalhando para trazer o melhor conteúdo para você. Volte
        em breve!
      </Typography>
    </Container>
  );
};

export default ConstructionPage;
