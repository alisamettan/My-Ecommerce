import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner
      className="h-20 w-20 text-orange-500"
      animation="border"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
