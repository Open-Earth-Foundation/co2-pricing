import { useNavigateAction } from "@aws-amplify/ui-react/internal";

export default function RestartButton() {
  const goToCalculator = useNavigateAction({
    type: "url",
    url: "/calculator/select",
  });

  return (
    <div
      className="Restart-button"
      onClick={() => {
        goToCalculator();
      }}
    >
      <div className="Frame-6867">
        <div className="restart_alt"></div>
      </div>
      <span className="Start-over">Start over</span>
    </div>
  );
}
