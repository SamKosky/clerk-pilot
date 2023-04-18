import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        layout: {
          helpPageUrl: "https://clerk.dev/support",
          logoPlacement: "inside",
          privacyPageUrl: "https://clerk.dev/privacy",
          showOptionalFields: true,
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.dev/terms",
        },
      }}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
