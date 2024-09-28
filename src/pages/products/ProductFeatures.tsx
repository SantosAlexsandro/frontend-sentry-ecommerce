// ProductFeatures.tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import dataCard from "../../mock/productsData.json";

const featuresData = {
  gerais: {
    Marca: 'xxx',
    Linha: 'xxx',
    Modelo: 'xxx',
  },
  especificacoes: {
    Tipo: 'xx',
    Qualidade: 'xxx',
    Lugares: 'xxx',
  },
};

export const ProductFeatures: React.FC = () => {
  return (
    <Box sx={{ marginY: 4 }}>
      <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
        Características do produto
      </Typography>
      <Grid container spacing={4}>
        {/* Características Gerais */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Características gerais
          </Typography>
          {Object.entries(featuresData.gerais).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value}
            </Typography>
          ))}
        </Grid>
        {/* Especificações */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Especificações
          </Typography>
          {Object.entries(featuresData.especificacoes).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
