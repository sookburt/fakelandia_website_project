import { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({error}) => {
  return(
    <div>
      <h1>Something went wrong...</h1>
      <pre>{error.message}</pre>
    </div>
  );
}

export default ErrorFallback;