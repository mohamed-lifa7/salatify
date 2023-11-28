import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getQibla } from "@/lib/get-qibla";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const page = async () => {
  const qibla = await getQibla();

  return (
    <div className="container mt-6 grid place-content-center">
      <Alert className="w-[450px]">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          We apologize, but the qibla direction feature is still under
          development, and it will just work on mobile.
        </AlertDescription>
      </Alert>
      <section>
        <p className="flex flex-col space-y-4">
          <span> longitude : {qibla.longitude}</span>
          <span> latitude : {qibla.latitude} </span>
          <span> direction : {qibla.direction} </span>
        </p>
      </section>
    </div>
  );
};

export default page;
