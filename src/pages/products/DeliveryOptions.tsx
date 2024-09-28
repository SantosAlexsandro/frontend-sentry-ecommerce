// DeliveryOptions.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export const DeliveryOptions: React.FC = () => {
  return (
    <Box>
      <Typography variant="body1" color="success.main">
        Chegará grátis amanhã sábado por ser sua primeira compra
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Comprando dentro das próximas 2 h 46 min
      </Typography>
    </Box>
  );
};
