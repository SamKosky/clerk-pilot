import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-100">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      appearance={{
        elements: {
          logoBox: "flex items-center justify-center h-full",
          logoImage: "h-[40px]",
          formButtonPrimary:
            "bg-gray-950 hover:bg-gray-800 text-sm normal-case",
        },
      }}
    />
  </div>
);
export default SignInPage;
