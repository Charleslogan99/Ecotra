"use client";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/accounts/login",
    "/accounts/sign-up",
    "/accounts/dashboard",
    "/accounts/forgotpassword",
    "/admin",
    "/admin/users",
    "/admin/bookings",
  ];

  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>Ecotra - Your Favorite Travel Agency</title>
        <meta
          name="description"
          content="Book flights, hotels, and tours with ease. Find the best deals on flights, hotels, and travel experiences."
        />
        <meta
          name="keywords"
          content="travel agency, book flights, book hotels, vacation packages, tours, best travel deals"
        />
        <meta name="author" content="Ecotra Travel" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Ecotra - Your Favorite Travel Agency"
        />
        <meta
          property="og:description"
          content="Find the best deals on flights, hotels, and travel experiences."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://ecotra.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Ecotra - Book Flights, Hotels & Tours"
        />
        <meta
          name="twitter:description"
          content="Best travel deals, book flights & hotels easily."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Ecotra Travel",
              url: "https://ecotra.com",
              logo: "https://ecotra.com/logo.png",
              description: "Book flights, hotels, and tours with ease.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234123456789",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>

      <body className="bg-gray-100">
        {!hiddenRoutes.includes(pathname) && <Navbar />}
        <main className="min-h-screen">{children}</main>
        {!hiddenRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
