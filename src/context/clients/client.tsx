"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type Client = Array<never>;

type ClientContextType = {
  client: Client | null;
  setClient: (client: Client) => void;
};

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [client, setClient] = useState<Client | null>(null);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context)
    throw new Error("useClient must be used within ClientContextProvider");
  return context;
};
