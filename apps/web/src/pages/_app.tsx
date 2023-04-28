import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import "~/styles/globals.css";
import { ApolloProviderWrapper } from "~/utils/ApolloProviderWrapper";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        layout: {
          helpPageUrl: "https://aginic.ventures",
          logoPlacement: "inside",
          privacyPageUrl: "https://aginic.ventures",
          showOptionalFields: true,
          socialButtonsPlacement: "top",
          socialButtonsVariant: "blockButton",
          termsPageUrl: "https://aginic.ventures",
        },
      }}
    >
      <ApolloProviderWrapper>
        <Component {...pageProps} />
      </ApolloProviderWrapper>
    </ClerkProvider>
  );
};

export default MyApp;
