export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="colorful-heading text-5xl mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn">
        Go Back Home
      </a>
    </div>
  );
}
