"use client";
import { useClient } from "@/context/clients/client";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { client } = useClient();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!client?.length) {
      if (path === "/auth") {
        setAuthorized(true);
        return;
      }
      router.push("/auth");
    } else {
      setAuthorized(true);
    }
  }, [client, router]);

  if (!authorized) return null;

  return <>{children}</>;
};

export default AuthGuard;
