import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Button from "./Button";

function Header() {
  return (
    <header className="fixed flex w-full items-center justify-end gap-2 px-6 py-3">
      <SignedIn>
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
