"use client";

import { useClient } from "@/context/clients/client";

const Header = () => {
  const { client } = useClient();
  return (
    <header>
      <h1>number of users :{client?.length ? client.length : "0"}</h1>
    </header>
  );
};

export default Header;
