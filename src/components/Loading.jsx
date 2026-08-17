import { Spinner } from "react-bootstrap";

function Loading({ text = "Loading..." }) {
  return (
    <div className="loading-container">

      <Spinner
        animation="border"
        variant="primary"
      />

      <p className="text-muted mt-3 mb-0">
        {text}
      </p>

    </div>
  );
}

export default Loading;