"use client";

import type { FC, PropsWithChildren } from "react";

import { getAnalytics, setAnalyticsCollectionEnabled } from "firebase/analytics";
import { getApp, initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { initializePerformance } from "firebase/performance";
import { useEffect } from "react";

initializeApp({
  apiKey: "AIzaSyAXSky1yVFcNwPsKQC_e_EPt7xaSCgWKBM",
  appId: "1:862963964840:web:a83e075d6d4666da63db9d",
  authDomain: "amursky-website.firebaseapp.com",
  measurementId: "G-39KWYR5W15",
  messagingSenderId: "862963964840",
  projectId: "amursky-website",
  storageBucket: "amursky-website.firebasestorage.app",
});

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const firebase = getApp();

    // Initialize App Check with reCAPTCHA v3 and enable debug mode in development
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_DEBUG_TOKEN;

    initializeAppCheck(firebase, {
      provider: new ReCaptchaV3Provider("6LeH_YEsAAAAAEaVbVngeZsvDIKhCzQy57sRhv_z"),
      isTokenAutoRefreshEnabled: true,
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

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: string;
  }
}
