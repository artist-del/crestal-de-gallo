import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cresta de Gallo - Island Booking System",
  description: "Book your island adventure to Cresta de Gallo, Sibuyan Island",
  icons: {
    icon: "/images/cresta_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        {children}
        <Toaster position="bottom-right" richColors closeButton theme="light" />
      </body>
    </html>
  );
}
