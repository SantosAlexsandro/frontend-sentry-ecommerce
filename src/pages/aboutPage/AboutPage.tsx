import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Sobre Nós
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Nossa Missão
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1" paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Nossa Visão
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae eros eu quam fringilla lacinia. Nulla facilisi. Fusce auctor
            est sit amet justo interdum, ac vehicula nulla euismod.
          </Typography>
          <Typography variant="body1" paragraph>
            Proin varius lacus vel leo sodales, sit amet iaculis massa dapibus.
            Suspendisse potenti. Donec at massa vitae nunc consectetur cursus.
            Curabitur at urna at dui commodo semper.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
        Nossos Valores
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet.
      </Typography>
      <Typography variant="body1" paragraph>
        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
        porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </Typography>
    </Container>
  );
};

export default AboutPage;
