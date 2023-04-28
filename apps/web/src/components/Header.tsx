import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Button from "./Button";

function Header() {
  const { isSignedIn, user } = useUser();
  return (
    <header className="fixed flex w-full items-center justify-end gap-3 px-6 py-3">
      <SignedIn>
        {isSignedIn && <p className="mr-4">Hello, {user.firstName}</p>}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* <SignInButton /> */}
        <Button href="/sign-up" label="Sign up" primary={false} />
        <Button href="/sign-in" label="Sign in" />
      </SignedOut>
    </header>
  );
}

export default Header;
