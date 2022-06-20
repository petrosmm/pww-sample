import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import "@styles/global.scss";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {

    // hack needed to manually load jquery
    typeof document !== undefined
      ? require("jquery")
      : null;

    // hack needed to manually load popper.js
    typeof document !== undefined
      ? require("popper.js")
      : null;

    // hack needed to manually load bootstrap.js
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;

  }, [router.events]);

  return <>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
