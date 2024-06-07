"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReduxProvider from "@/store/ReduxProvider";
import { useSelector } from "react-redux";
import { isAuthenticated } from "@/utils/middlware";

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const { user } = useSelector(state => state.auth);
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        const checkAuthentication = async () => {
            if (!isAuthenticated(user)) {
                console.log(user);
                router.push("/login");
            }
        };
        setIsClient(true)
        checkAuthentication();
    }, [router]);
    if (isAuthenticated(user)) {
        return (
            <>
                {isClient ? (<ReduxProvider>
                    <div>{children}</div>
                </ReduxProvider>) : (<></>)}
            </>
        );
    }

    // If not loading and user is not authenticated, do not render anything
    return null;
}
