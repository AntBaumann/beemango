import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "../Footer";
import useIsWideScreen from "../../hooks/isWideScreen";

const PageWrapper = ({ children }: PropsWithChildren) => {
  const isWideScreen = useIsWideScreen();
  return (
    <Stack
      paddingTop={isWideScreen ? 11 : undefined}
      height={isWideScreen ? "100%" : "calc(100% - 64px)"}
      justifyContent="space-between"
    >
      <Box>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default PageWrapper;
