import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Evict legacy service workers and cache from old domain mapping (e.g. Namami Vindhyavasini)
if (typeof window !== "undefined") {
  // Clean up legacy localStorage keys
  if ("localStorage" in window) {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.includes("vindhyavasini") || 
          key.includes("sansthan") || 
          key.includes("namami") ||
          key.includes("audio") ||
          key.includes("playback")
        )) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => {
        console.log("[LocalStorage] Removing legacy key:", key);
        localStorage.removeItem(key);
      });
    } catch (e) {
      console.error("[LocalStorage] Failed to clear legacy keys:", e);
    }
  }

  // Clean up legacy cache storage and force unregister legacy service worker
  if ("caches" in window) {
    caches.keys().then((cacheNames) => {
      let hasLegacyCache = false;
      cacheNames.forEach((cacheName) => {
        if (
          cacheName.includes("vindhyavasini") || 
          cacheName.includes("sansthan") ||
          cacheName.includes("namami")
        ) {
          hasLegacyCache = true;
          console.log("[Cache] Removing legacy cache:", cacheName);
          caches.delete(cacheName).catch((err) => {
            console.error("[Cache] Failed to delete cache:", cacheName, err);
          });
        }
      });

      if (hasLegacyCache && "serviceWorker" in navigator) {
        console.log("[Service Worker] Legacy cache detected. Unregistering service workers to force clean update...");
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister().then(() => {
              console.log("[Service Worker] Legacy service worker unregistered successfully.");
              window.location.reload();
            });
          }
        });
      }
    });
  }
}

createRoot(document.getElementById("root")!).render(<App />);

// Force immediate page reload when a new service worker version is activated
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}

