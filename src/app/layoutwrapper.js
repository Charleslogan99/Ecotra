"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({ children }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the component to render on the client only
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing server-side
  }

  const pathname = router.pathname;

  // Define routes where the Navbar and Footer should not be shown
  const noNavbarFooterRoutes = ['/accounts/sign-up']; // Example route

  // Check if the current route is one where Navbar and Footer should be hidden
  const shouldHideNavbarFooter = noNavbarFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      {children}
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}
