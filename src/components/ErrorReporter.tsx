import React from "react";
import { Home, RefreshCw, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorReporterProps {
  error: Error & { digest?: string };
  reset?: () => void;
  layout?: 'page' | 'global';
}

/**
 * A shared error component for catching and displaying errors.
 * Renders either a full-page error or an inline error within a component.
 */
export default function ErrorReporter({
  error,
  reset,
  layout = "page",
}: ErrorReporterProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };
  
  const showFixButton = error.message.includes("ENOENT") || error.message.includes("EADDRINUSE") || error.message.includes("Next.js");

  const errorMessage = "An unexpected error occurred. Please try again or contact support if the problem persists.";

  /* ─ page-level UI ─ */
  if (layout === "page") {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center space-y-6 bg-card p-8 rounded-lg shadow-lg">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-destructive">
              Oops! Something went wrong.
            </h1>
            <p className="text-muted-foreground">{errorMessage}</p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <details className="mt-4 text-left bg-muted p-3 rounded-md">
              <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                Error Details
              </summary>
              <pre className="mt-2 text-xs text-destructive-foreground bg-destructive p-2 rounded overflow-auto whitespace-pre-wrap">
                {error.message}
              </pre>
              {error.digest && (
                <pre className="mt-2 text-xs text-muted-foreground/80">
                  Digest: {error.digest}
                </pre>
              )}
            </details>
          )}

          <div className="flex justify-center gap-4 mt-6">
            {reset && (
              <Button
                variant="outline"
                onClick={reset}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </Button>
            )}
            {!reset && (
              <Button
                variant="outline"
                onClick={handleRefresh}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh Page</span>
              </Button>
            )}
            <Button
              onClick={handleGoHome}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Button>
             {showFixButton && (
                 <Button
                 variant="destructive"
                 className="flex items-center gap-2"
               >
                 <Wrench className="w-4 h-4" />
                 <span>Fix</span>
               </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ─ global-error UI ─ */
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-destructive">
              Something went wrong!
            </h1>
            <p className="text-muted-foreground">
              An unexpected error occurred. Please try again fixing with Orchids.app
            </p>
          </div>
          <div className="space-y-2">
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Error details
                </summary>
                <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </details>
            )}
          </div>
          <div className="flex justify-center gap-4">
            {reset && (
              <button
                onClick={reset}
                className="px-4 py-2 text-sm font-medium rounded-md text-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Try again
              </button>
            )}
             {showFixButton && (
                 <Button
                 variant="destructive"
                 className="flex items-center gap-2"
               >
                 <Wrench className="w-4 h-4" />
                 <span>Fix</span>
               </Button>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
