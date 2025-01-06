import { Button } from "./Button";

export function ContinueButtons() {
  return (
    <div className="flex flex-col gap-y-4">
      <Button href="https://www.google.com" target="_blank" variant="secondary">
        <img src="https://www.svgrepo.com/show/452216/google.svg" alt="Google svg" className="pointer-events-none size-5" />
        <span className="text-sm/6 font-semibold">Google</span>
      </Button>

      <Button href="https://github.com" target="_blank" variant="secondary">
        <img src="https://www.svgrepo.com/show/343553/facebook-network-communication-internet-interaction.svg" alt="Facebook svg" className="pointer-events-none size-5" />
        <span className="text-sm/6 font-semibold">GitHub</span>
      </Button>

      <Button href="https://www.apple.com" target="_blank" variant="secondary">
        <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple svg" className="pointer-events-none size-5" />
        <span className="text-sm/6 font-semibold">Apple</span>
      </Button>
      
      <Button href="https://www.facebook.com" target="_blank" variant="secondary">
        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub svg" className="pointer-events-none size-5" />
        <span className="text-sm/6 font-semibold">GitHub</span>
      </Button>
    </div>
  );
}
