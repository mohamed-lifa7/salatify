import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const page = () => {
  return (
    <div className="container mt-6 grid place-content-center">
      <Alert className="w-[450px]">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          We apologize, but the qibla direction feature is still under
          development.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default page;
