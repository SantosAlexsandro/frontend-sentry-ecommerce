import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom"; // Importação do Link
import dataCard from "../../../mock/productsData.json";

export const BasePromoNinjaUltimate = () => {
  return (
    <Grid container spacing={2}>
      {dataCard.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card
            sx={{
              margin: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.description}
                sx={{ width: "auto", height: "200px", objectFit: "cover" }}
              />
            </Box>
            <CardContent>
              <Typography fontWeight={"bold"} marginBottom={1}>
                {product.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "secondary.main",
                }}
              >
                {product.price}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                À vista no pix
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                ou até {product.installment}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="large"
                fullWidth
                variant="contained"
                component={Link} // Definindo o Link como componente do botão
                to={product.link} // Usando "to" ao invés de "href" para navegação interna
              >
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
