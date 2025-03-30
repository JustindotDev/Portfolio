import { useEffect } from "react";

const RedirectToChrome = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if it's Facebook's in-app browser
    if (userAgent.includes("FBAN") || userAgent.includes("FBAV")) {
      // Redirect to Chrome
      window.location.href =
        "intent://yourwebsite.com/#Intent;scheme=https;package=com.android.chrome;end;";
    }
  }, []);

  return null; // This component doesn't render anything
};

export default RedirectToChrome;
