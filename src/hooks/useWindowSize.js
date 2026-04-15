import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";

const useWindowSize = () => {
  // SSR-safe: keep initial value the same on server and client to avoid hydration mismatch.
  // We populate the real width after mount.
  const [width, setWidth] = useState(undefined);
  const windowListener = useMemo(
    () =>
      debounce(() => {
        if (typeof window !== "undefined") {
          setWidth(window.innerWidth);
        }
      }, 250),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }

    return () => {
      windowListener.cancel();
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", windowListener);
      }
    };
  }, [windowListener]);

  return width;
};

export default useWindowSize;
