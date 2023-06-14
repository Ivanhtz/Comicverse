import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


import heroImg from "../../../media/hero1.png";
import CustomButton from "./CustomButton";

const Hero = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));

    return (
        <Box sx={{ backgroundColor: "#CBC3E2", minHeight: "80vh" }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4,
                            }}
                        >
                            Bienvenido a ComicVerse
                        </Typography>
                        <Title variant="h1">
                            Tu aplicación de comics más completa.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            ¡Descubre los mejores descuentos en cómics antes de que lleguen al mercado masivo! ¡Ofertas candentes en cómics de colección con una simple búsqueda!
                        </Typography>
                        <CustomButton
                            backgroundColor="#0F1B4C"
                            color="#fff"
                            buttonText="Visitanos"
                            heroBtn={true}
                        />
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        <img
                            src={heroImg}
                            alt="heroImg"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Hero;