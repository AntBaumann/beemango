import React, { PropsWithChildren } from "react";
import { Box, Container, styled, useMediaQuery, useTheme } from "@mui/material";

const FullWidthBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const Section = ({
  img,
  bgcolor,
  titleSection,
  children,
}: PropsWithChildren<{
  img?: string;
  titleSection?: boolean;
  bgcolor?: string;
}>) => {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <FullWidthBox
      sx={{
        backgroundImage: img ? `url(img/${img})` : "none",
        py: titleSection && isWideScreen ? 15 : undefined,
        bgcolor,
      }}
    >
      <Container maxWidth={"md"} sx={{ padding: "3.5em 2em" }}>
        {children}
      </Container>
    </FullWidthBox>
  );
};

export default Section;
