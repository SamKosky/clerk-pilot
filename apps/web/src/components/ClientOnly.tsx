import { Fragment, useEffect, useState, type PropsWithChildren } from "react";

export default function ClientOnly({
  children,
  ...delegated
}: PropsWithChildren) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <Fragment {...delegated}>{children}</Fragment>;
}
