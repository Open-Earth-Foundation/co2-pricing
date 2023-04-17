import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CheckCircleOutline } from "@mui/icons-material";

export default function PriceContainer() {
  const primary = "#24be00";

  const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
    },
  });

  return (
    <div className="Success">
      <ThemeProvider theme={theme}>
        <CheckCircleOutline
          className="check_circle"
          fontSize="medium"
          color="primary"
        />
      </ThemeProvider>
      <span className="Here-is-your-carbon-price">
        Here is your
        <span className="text-style-1"> carbon price</span>
      </span>
    </div>
  );
}
