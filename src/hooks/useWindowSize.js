import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(() =>
    typeof window === "undefined" ? 390 : window.innerWidth
  );
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
