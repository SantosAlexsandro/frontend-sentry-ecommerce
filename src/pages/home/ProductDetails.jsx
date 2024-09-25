// eslint-disable-next-line no-unused-vars
import React from "react";
import products from '../../../products.json'
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { BaseLayout } from "../../shared/layouts/baseLayout/BaseLayout";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Typography>Produto não encontrado.</Typography>;
  }

  return (
    <BaseLayout>
      <Container>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={product.imageUrl}
            alt={product.name}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "300px", // Define uma altura máxima
              objectFit: "contain", // Contain garante que a imagem se ajuste sem cortar
              objectPosition: "center", // Centraliza a imagem dentro do container
            }}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Voltar à Lista
            </Button>
          </CardContent>
        </Card>
        <Card>Descrição do Produto</Card>
      </Container>
    </BaseLayout>
  );
}

export default ProductDetails;
