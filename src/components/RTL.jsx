import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import useSettings from "hooks/useSettings";
import { useEffect, useState } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl"; // ========================================================

// ========================================================
const cacheRTL = createCache({
  key: "rtl",
  prepend: true,
  stylisPlugins: [rtlPlugin, prefixer],
});

const RTL = ({ children }) => {
  const { settings } = useSettings();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR/client direction flip during hydration (localStorage-backed settings).
  const direction = mounted ? settings.direction : "ltr";
  useEffect(() => {
    if (!mounted) return;
    document.dir = direction;
  }, [direction, mounted]);

  if (direction === "rtl") {
    return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export default RTL;
