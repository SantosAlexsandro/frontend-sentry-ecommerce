// PurchaseActions.tsx
import React from 'react';
import { Box, Button } from '@mui/material';

export const PurchaseActions: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="contained" color="primary" fullWidth>
        Comprar Agora
      </Button>
      <Button variant="outlined" color="primary" fullWidth>
        Adicionar ao Carrinho
      </Button>
    </Box>
  );
};
