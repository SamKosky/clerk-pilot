import { SignedIn } from "@clerk/nextjs";
import lottie from "lottie-web";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ClientOnly from "~/components/ClientOnly";
import Countries from "~/components/Countries";
import Header from "~/components/Header";
import winkyTongueAnim from "~/lotties/winky-tongue.json";

export const getServerSideProps: GetServerSideProps<{
  city: string;
  region: string;
  country: string;
  // eslint-disable-next-line @typescript-eslint/require-await
}> = async ({ query }) => {
  return {
    props: {
      city: String(query.city),
      region: String(query.region),
      country: String(query.country),
    },
  };
};

function Home({
  city,
  region,
  country,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const winkyTongueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!winkyTongueRef.current) return;

    lottie.loadAnimation({
      container: winkyTongueRef.current,
      loop: true,
      autoplay: false,
      animationData: winkyTongueAnim,
    });

    return () => {
      lottie.destroy();
    };
  }, [winkyTongueRef]);

  return (
    <>
      <Head>
        <title>Clerk Postura</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
              Clerk Postura
            </h1>
            <div
              ref={winkyTongueRef}
              className="h-16 w-16 cursor-pointer"
              onMouseEnter={() => lottie.play()}
              onMouseLeave={() => lottie.pause()}
            />
          </div>
          <h2 className="font-mono text-xl">
            Vercel | Hasura | Postgres | Clerk
          </h2>

          <div className="flex items-center justify-center gap-3">
            <Link
              href={"/server-side"}
              className="text-xl font-medium underline decoration-black"
            >
              Go to: Server-side
            </Link>

            <SignedIn>
              <Link
                href={"/user-profile"}
                className="text-xl font-medium underline decoration-black"
              >
                Profile
              </Link>
            </SignedIn>
          </div>

          <div className="flexborder-b rounded-xl bg-gray-50 p-4">
            <h4 className="text-left font-semibold">Geolocation Headers</h4>
            <pre className="mt-4 rounded-xl bg-black px-4 py-2 text-left font-mono text-sm leading-6 text-white">
              <p>
                <strong>{"x-vercel-ip-city: "}</strong>
                {city}
              </p>
              <p>
                <strong>{"x-vercel-ip-country-region: "}</strong>
                {region}
              </p>
              <p>
                <strong>{"x-vercel-ip-country: "}</strong>
                {country}
              </p>
            </pre>
          </div>

          <SignedIn>
            <ClientOnly>
              <Countries />
            </ClientOnly>
          </SignedIn>
        </div>
      </main>
    </>
  );
}

export default Home;
