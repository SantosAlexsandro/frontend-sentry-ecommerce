import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  Grid2,
  Grid
} from "@mui/material";

const dataCard = [
  {
    id: 1,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages1.kabum.com.br%2Fprodutos%2Ffotos%2F518061%2Fnotebook-gamer-asus-tuf-gaming-f15-fx507vu-intel-core-i7-13620h-rtx-4050-8gb-ram-ssd-512gb-15-6-led-fhd-144hz-keepos-fx507vu-lp151_1712001146_m.jpg&w=256&q=75",
    description:
      "Notebook Gamer ASUS TUF Gaming F15 FX507VU, Intel core i7 13620H, RTX 4050, 8GB RAM...",
    price: "R$ 0.000,00",
    installment: "10x de R$ 000,00",
  },
  {
    id: 2,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F129459%2Fprocessador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_m.jpg&w=256&q=75",
    description:
      "xxxxxxxxxx",
    price: "R$ 0.000,00",
    installment: "10x de R$ 000,00",
  },
  {
    id: 2,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F129459%2Fprocessador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_m.jpg&w=256&q=75",
    description:
      "xxxxxxxxxx",
    price: "R$ 0.000,00",
    installment: "10x de R$ 000,00",
  },
  {
    id: 2,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F129459%2Fprocessador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_m.jpg&w=256&q=75",
    description:
      "xxxxxxxxxx",
    price: "R$ 0.000,00",
    installment: "10x de R$ 000,00",
  },
  {
    id: 2,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F129459%2Fprocessador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_m.jpg&w=256&q=75",
    description:
      "xxxxxxxxxx",
    price: "R$ 0.000,00",
    installment: "10x de R$ 000,00",
  },
  {
    id: 2,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F129459%2Fprocessador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_m.jpg&w=256&q=75",
    description:
      "xxxxxxxxxx",
    price: "R$ 0.000,00",
    installment: "10x de R$ 000,00",
  },
];

export const BasePromoNinjaUltimate = () => {
  return (
    <Grid container spacing={2}>
      {dataCard.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
        <Card  sx={{
            margin: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt="Notebook Gamer ASUS"
              sx={{ width: "auto", objectFit: "cover" }}
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
              R$ 0.000,00
            </Typography>
            <Typography variant="body1" color="text.secondary">
              À vista no pix
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ou até 10x de R$ 000,00
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="large" fullWidth variant="contained">
              Comprar
            </Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
   </Grid>
  );
};
