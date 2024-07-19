"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { ReactNode, useState } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const [client] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  }));

  return <QueryClientProvider client={client}>
    <ReactQueryDevtools 
    initialIsOpen={false}
    />
    {children}
  </QueryClientProvider>;
};

export default Providers;
