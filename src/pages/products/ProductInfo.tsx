// ProductInfo.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export const ProductInfo: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" component="h1" fontWeight="bold">
        Kit Cftv 3 Câmeras Segurança Intelbras Residencial Mhdx 1004
      </Typography>
      <Typography variant="h4" color="primary" fontWeight="bold">
        R$ 790,20
      </Typography>
      <Typography variant="body2" color="text.secondary">
        em 12x de R$ 76,61 sem juros
      </Typography>
    </Box>
  );
};
