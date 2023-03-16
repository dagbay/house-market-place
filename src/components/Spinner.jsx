import SpinnerGIF from '../assets/gif/spinner.gif'

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner">
        <SpinnerGIF />
      </div>
    </div>
  )
}
export default Spinner