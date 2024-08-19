import { useMediaQuery, useTheme } from "@mui/material";

const useIsWideScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("md"));
};

export default useIsWideScreen;
