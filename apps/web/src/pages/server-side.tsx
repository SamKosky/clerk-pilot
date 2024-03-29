import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { buildClerkProps, clerkClient, getAuth } from "@clerk/nextjs/server";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
import { env } from "~/env.mjs";
import { getCountries } from "~/graphql";
import {
  type Country,
  type GetCountriesQuery,
} from "~/types/generated/graphql";

export const getServerSideProps: GetServerSideProps<{
  user?: Record<string, unknown>;
  countries?: Country[];
}> = async (ctx) => {
  const { getToken, userId } = getAuth(ctx.req);

  const token = await getToken({ template: "hasura" });

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  if (!token) {
    console.error("Failed to get token from jwt template");
    return { props: {} };
  }

  const httpLink = new HttpLink({
    uri: env.NEXT_PUBLIC_GRAPHQL_URI,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query<GetCountriesQuery>({
    query: getCountries,
  });

  return {
    props: {
      user: buildClerkProps(ctx.req, { user }),
      countries: data?.Country.slice(0, 4),
    },
  };
};

const ServerSide: NextPage = ({
  user,
  countries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Server-side rendering</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Server-side rendering
          </h1>
          <Link
            href={"/"}
            className="text-xl font-medium underline decoration-black"
          >
            Go to: Home
          </Link>
          {countries ? (
            <div className="align-center mt-3 flex h-[150px] w-full max-w-3xl justify-center">
              {countries.map((country) => (
                <div
                  key={country.code}
                  className="m-1 grow rounded-xl border border-gray-500 p-3 text-left text-black decoration-transparent transition-all"
                >
                  <h3 className="text-xl font-semibold">
                    {country.name} {country.emoji}
                  </h3>
                  <p className="text-base">{country.code}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No countries exist</p>
          )}

          <p className="text-xl font-medium">Clerk user object</p>
          {user && (
            <pre className="flex max-w-3xl flex-wrap overflow-x-auto rounded-xl bg-black p-3 font-mono text-white">
              {JSON.stringify(user, undefined, 2)}
            </pre>
          )}
        </div>
      </main>
    </>
  );
};

export default ServerSide;
