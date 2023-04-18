import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-100">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);
export default SignUpPage;
