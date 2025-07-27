"use client";

import { useEffect, useState } from "react";

export function AccessibilityAnnouncer() {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // Listen for custom accessibility announcements
    const handleAnnouncement = (event: CustomEvent) => {
      setAnnouncement(event.detail.message);
      // Clear after announcement
      setTimeout(() => setAnnouncement(""), 1000);
    };

    window.addEventListener(
      "accessibility-announce",
      handleAnnouncement as EventListener
    );

    return () => {
      window.removeEventListener(
        "accessibility-announce",
        handleAnnouncement as EventListener
      );
    };
  }, []);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      role="status"
    >
      {announcement}
    </div>
  );
}

// Utility function to make announcements
export function announceToScreenReader(message: string) {
  const event = new CustomEvent("accessibility-announce", {
    detail: { message },
  });
  window.dispatchEvent(event);
}
