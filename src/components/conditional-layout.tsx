"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavAndFooter =
    pathname.startsWith("/auth/login") || pathname.startsWith("/auth/sign-up " ) || pathname.startsWith("/waitlist") || pathname.startsWith("/not-found");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      {children}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
