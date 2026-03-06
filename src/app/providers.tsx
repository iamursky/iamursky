"use client";

import type { FC, PropsWithChildren } from "react";

import { getAnalytics, setAnalyticsCollectionEnabled } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { initializePerformance } from "firebase/performance";
import { useEffect } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const firebase = initializeApp({
      apiKey: "AIzaSyAXSky1yVFcNwPsKQC_e_EPt7xaSCgWKBM",
      appId: "1:862963964840:web:a83e075d6d4666da63db9d",
      authDomain: "amursky-website.firebaseapp.com",
      measurementId: "G-39KWYR5W15",
      messagingSenderId: "862963964840",
      projectId: "amursky-website",
      storageBucket: "amursky-website.firebasestorage.app",
    });

    const isProduction = process.env.NODE_ENV === "production";

    // Disable analytics collection in development
    const analytics = getAnalytics(firebase);
    setAnalyticsCollectionEnabled(analytics, isProduction);

    // Disable performance monitoring in development
    initializePerformance(firebase, {
      dataCollectionEnabled: isProduction,
    });
  }, []);

  return children;
};
