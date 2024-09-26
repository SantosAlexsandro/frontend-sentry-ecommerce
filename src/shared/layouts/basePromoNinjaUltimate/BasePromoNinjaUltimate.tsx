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

const dataCard = [
  {
    id: 1,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages1.kabum.com.br%2Fprodutos%2Ffotos%2F518061%2Fnotebook-gamer-asus-tuf-gaming-f15-fx507vu-intel-core-i7-13620h-rtx-4050-8gb-ram-ssd-512gb-15-6-led-fhd-144hz-keepos-fx507vu-lp151_1712001146_m.jpg&w=256&q=75",
    description:
      "Notebook Gamer ASUS TUF Gaming F15 FX507VU, Intel core i7 13620H, RTX 4050, 8GB RAM...",
    price: "R$ 12.499,00",
    installment: "10x de R$ 1.249,90 sem juros",
    link: "/product/1",
  },
  {
    id: 2,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages9.kabum.com.br%2Fprodutos%2Ffotos%2F129459%2Fprocessador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_m.jpg&w=256&q=75",
    description:
      "Processador AMD Ryzen 9 5900X, Cache 70MB, 3.7GHz, 4.8GHz Max Turbo, AM4",
    price: "R$ 3.299,00",
    installment: "10x de R$ 329,90 sem juros",
    link: "/product/2",
  },
  {
    id: 3,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F384627%2Fplaca-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb-gddr6-dlss-ray-tracing-912-v397-272_1663850312_g.jpg&w=640&q=100",
    description: "Placa de Vídeo MSI GeForce RTX 3060 Ti Gaming X 8GB GDDR6",
    price: "R$ 4.999,00",
    installment: "10x de R$ 499,90 sem juros",
    link: "/product/3",
  },
  {
    id: 4,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F107333%2Fmouse-gamer-sem-fio-logitech-g-pro-wireless-lightspeed-rgb-lightsync-ambidestro-6-botoes-programaveis-hero-25k-910-005271_1644501564_g.jpg&w=640&q=100",
    description: "Mouse Gamer Logitech G Pro X Superlight Wireless",
    price: "R$ 799,00",
    installment: "10x de R$ 79,90 sem juros",
    link: "/product/4",
  },
  {
    id: 5,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F93157%2F93157_1523969490_index_g.jpg&w=640&q=100",
    description:
      "Teclado Mecânico Gamer Redragon Kumara RGB, Switch Outemu Blue",
    price: "R$ 299,00",
    installment: "10x de R$ 29,90 sem juros",
    link: "/product/5",
  },
  {
    id: 6,
    image:
      "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F364835%2Fmonitor-gamer-lg-ultragear-32-led-165-hz-qhd-1ms-hdmi-displayport-95-srgb-freesync-premium-hdr-10-vesa-preto-32gn600-b_1715801726_g.jpg&w=640&q=100",
    description: "Monitor LG Gamer UltraGear 27'' LED, IPS, WQHD, 165Hz",
    price: "R$ 2.499,00",
    installment: "10x de R$ 249,90 sem juros",
    link: "/product/6",
  },
  {
    id: 7,
    image:
      "https://a-static.mlcdn.com.br/800x560/console-playstation-5-slim-ssd-1tb-edicao-digital-branco-2-jogos-1000038914-sony/kabum/542929/08542b6b470730c37677b47a9ba3957c.jpeg",
    description: "Console PlayStation 5 Sony, 825GB, Branco",
    price: "R$ 4.499,00",
    installment: "10x de R$ 449,90 sem juros",
    link: "/product/7",
  },
  {
    id: 8,
    image:
      "https://fastshopbr.vtexassets.com/arquivos/ids/492477/0_AEMLPF3BRAPTO_PRD_1500_1.jpg?v=638617769722300000",
    description: "Smartphone Apple iPhone 13, 128GB, Verde",
    price: "R$ 6.999,00",
    installment: "10x de R$ 699,90 sem juros",
    link: "/product/8",
  },
  {
    id: 9,
    image:
      "https://fastshopbr.vtexassets.com/arquivos/ids/500795/0_SGUN55DU8000_PRD_1500_1.jpg?v=638617943919870000",
    description: "Smart TV Samsung 55'' Crystal UHD 4K",
    price: "R$ 3.199,00",
    installment: "10x de R$ 319,90 sem juros",
    link: "/product/9",
  },
  {
    id: 10,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_851672-MLB53357035084_012023-O.webp",
    description: "Kit 3 Câmeras de Segurança Intelbras Full HD",
    price: "R$ 799,00",
    installment: "10x de R$ 79,90 sem juros",
    link: "/product/10",
  },
];

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
                href={product.link}
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
