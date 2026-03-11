"use client";

import type { FC } from "react";

import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

interface IProps {
  postId: string;
}

export const Analytics: FC<IProps> = ({ postId }) => {
  useEffect(() => {
    const analytics = getAnalytics();

    logEvent(analytics, "page_view", {
      page_title: "Blog Post",
      page_location: window.location.href,
      page_path: window.location.pathname,
      post_id: postId,
    });
  }, [postId]);

  return null;
};
