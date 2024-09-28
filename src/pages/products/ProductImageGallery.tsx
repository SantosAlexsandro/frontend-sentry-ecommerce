// ProductImageGallery.tsx
import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import dataCard from "../../mock/productsData.json";

export const ProductImageGallery: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém a ID da URL
  const product = dataCard.find((item) => item.id === Number(id)); // Encontra o produto correspondente

  if (!product) {
    return (
      <Typography variant="h6" color="error">
        Produto não encontrado
      </Typography>
    ); // Mensagem caso o produto não seja encontrado
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.description}
        sx={{
          width: "300px",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
};
