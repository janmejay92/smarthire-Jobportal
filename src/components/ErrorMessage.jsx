import { Alert, Button } from "react-bootstrap";

function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <Alert
      variant="danger"
      className="d-flex justify-content-between align-items-center"
    >
      <span>
        {message}
      </span>

      {onRetry && (
        <Button
          variant="outline-danger"
          size="sm"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </Alert>
  );
}

export default ErrorMessage;