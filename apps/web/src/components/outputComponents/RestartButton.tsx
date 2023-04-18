import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import { RestartAlt } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function RestartButton() {
  const goToCalculator = useNavigateAction({
    type: "url",
    url: "/calculator/select",
  });

  const primary = "#F23D33";

  const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
    },
  });

  return (
    <div className="Restart-button-container">
      <div
        className="Restart-button"
        onClick={() => {
          goToCalculator();
        }}
      >
        <div className="Frame-6867">
          <ThemeProvider theme={theme}>
            <RestartAlt color="primary" />
          </ThemeProvider>
        </div>
        <span className="Start-over">Start over</span>
      </div>
    </div>
  );
}
