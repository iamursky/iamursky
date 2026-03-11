"use client";

import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

export const Analytics = () => {
  useEffect(() => {
    const analytics = getAnalytics();

    logEvent(analytics, "page_view", {
      page_title: "Portfolio",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return null;
};
