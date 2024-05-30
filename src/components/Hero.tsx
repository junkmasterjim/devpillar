import { ExpandBadge } from "./expand-badge";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-t from-background to-secondary">
      <div className="flex py-8 text-center justify-center items-center flex-col select-none">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-6xl font-medium text-foreground capitalize tracking-tighter">
            Top notch developer tools
          </h1>
          <h2 className="text-4xl font-medium capitalize text-foreground/80 tracking-tighter">
            Quality resources
          </h2>
        </div>
        <p className="text-muted-foreground max-w-prose mt-4 text-lg tracking-tight">
          Welcome to DevPillar. We think you&apos;ll like it here.
        </p>

        <div className="mt-4">
          <ExpandBadge />
        </div>

        <div className="max-w-sm w-full mx-auto overflow-hidden items-center justify-center mt-2 pb-12">
          <iframe
            scrolling="no"
            src="https://embeds.beehiiv.com/083e2abd-d1cb-4d50-b5d5-3146de92c860?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            className="scale-[80%] overflow-hidden rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};
