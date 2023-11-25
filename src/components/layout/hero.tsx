import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center pt-8 sm:max-w-xl md:max-w-full lg:pt-16">
      <div className="flex max-w-2xl flex-col items-center md:px-8">
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <Badge>Brand new</Badge>
          <h2 className="mb-6 max-w-lg text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
            Empowering You with Resources for Islamic Living
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Get accurate prayer times customized to your location so you never
            miss salah. Check the Islamic calendar for important dates.
          </p>
        </div>
        <form className="mb-4 flex w-full items-center space-x-4">
          <Input placeholder="Your city" required type="text" />
          <Button type="submit">Search</Button>
        </form>
        <p className="mb-10 max-w-md text-xs text-muted-foreground sm:text-sm md:text-center">
          Bringing you authentic resources for your Islamic lifestyle needs and
          worship.
        </p>
      </div>
    </div>
  );
};
