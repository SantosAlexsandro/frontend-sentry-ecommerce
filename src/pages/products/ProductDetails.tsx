import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";
import { DeliveryOptions } from "./DeliveryOptions";
import { PurchaseActions } from "./PurchaseActions";
import { ProductFeatures } from "./ProductFeatures";

const ProductDetails: React.FC = () => {
  const [open, setOpen] = useState(false); // Estado para controlar o modal

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ProductImageGallery />
          {/* Botão para abrir o vídeo */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
              sx={{ marginTop: 2 }}
            >
              Assistir Vídeo de Apresentação
            </Button>
          </Box>
          {/* Modal do vídeo */}
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Vídeo de Apresentação do Produto</DialogTitle>
            <DialogContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/watch?v=zfQk-e8WtaI" // Substitua por sua URL do vídeo
                  title="Vídeo de Apresentação"
                  frameBorder="0"
                  allowFullScreen
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductInfo />
          <Divider sx={{ marginY: 2 }} />
          <DeliveryOptions />
          <Divider sx={{ marginY: 2 }} />
          <PurchaseActions />
          <Divider sx={{ marginY: 2 }} />
          <ProductFeatures />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
