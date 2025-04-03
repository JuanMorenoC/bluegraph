import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import analisisDatosImagen from "../assets/analisis-de-datos-con-inteligencia-artificial-1.png";
import reportesDatosImagen from "../assets/reportes-eficientes.png";

function Information() {
  /*const user = {
    name: "Analisis de datos con inteligencia artificial",
    imageUrl: analisisDatosImagen,
    imageSize: 309,
  };*/
  const cards = [
    {
      id: 1,
      title: "Analizador",
      description: "Analiza los datos que contenga una base de datos en formatos csv, xlsx",
      name: "Analisis de datos con inteligencia artificial",
      imageUrl: analisisDatosImagen,
      imageSize: 309,
    },
    {
      id: 2,
      title: "Reportes",
      description: "Se puede descargar reportes en documentos pdf con el fin de informarse sobre los datos de tu base de datos",
      name: "Reportes eficientes",
      imageUrl: reportesDatosImagen,
      imageSize: 309,
    },
  ];
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '88vh' }} /> */}
        <h3>Analizador con IA para tus datos</h3>
        {/*<img
          className="avatar"
          src={user.imageUrl}
          alt={"Foto de " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />*/}
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={card.imageSize}
                  image={card.imageUrl}
                  alt={"Foto de " + card.name}
                />
                <CardContent sx={{ height: "100%" }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Information;
