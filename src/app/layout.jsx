"use client";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ReduxProvider from "@/store/ReduxProvider";
import { useEffect } from "react";
import { isAuthenticated, protectRoute } from "@/utils/middlware";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  // const { user } = useSelector(state => state.auth)
  // const router = useRouter();
  // useEffect(() => {
  //   const protectRoutes = protectRoute(router, user);
  //   protectRoutes();

  // }, []);
  // if (isAuthenticated(user)) {
    return (
      <html lang="en">
        <ReduxProvider>
          <body className="bg-[#ffffff]">
            <Header />
            <main className="min-h-[100vh]">{children}</main>
            <Footer />
          </body>
        </ReduxProvider>
      </html>
    );
  }
// }