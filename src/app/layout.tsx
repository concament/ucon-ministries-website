import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Chatbot from "@/components/Chatbot";
import BackgroundMusic from "@/components/BackgroundMusic";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "UCon Ministries - Where Your Past Becomes Your Purpose",
  description: "Transforming lives through purpose, faith, and community support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          <PageTransition>
            {children}
          </PageTransition>
          <Chatbot />
          <BackgroundMusic />
          <Toaster />
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}