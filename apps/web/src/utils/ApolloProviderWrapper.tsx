import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth } from "@clerk/nextjs";
import { useMemo, type PropsWithChildren } from "react";
import { env } from "~/env.mjs";

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const { getToken } = useAuth();

  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken({ template: "hasura" });

      if (!token) {
        console.error("Failed to get token from jwt template");
        return undefined;
      }

      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const httpLink = new HttpLink({
      uri: env.NEXT_PUBLIC_GRAPHQL_URI,
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, [getToken]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
