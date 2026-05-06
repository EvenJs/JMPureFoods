import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
      bg-off-white px-6 text-center gap-6"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-8xl font-bold text-brand/20">404</span>
        <h1 className="text-2xl font-bold text-text-dark">Page not found</h1>
        <p className="text-text-muted text-sm max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <ButtonLink to="/" variant="gold" size="md">
        Back to Home
      </ButtonLink>
    </div>
  );
}
