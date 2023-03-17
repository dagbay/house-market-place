import SpinnerGIF from "../assets/gif/spinner.gif";

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner">
        <img src={SpinnerGIF} alt="Loading..." />
      </div>
    </div>
  );
}
export default Spinner;
