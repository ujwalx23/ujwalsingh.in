import React, { useState, useEffect } from "react";
import { Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export function LiveStatusWidget() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }).format(now);
        setTimeStr(formatted);
      } catch (e) {
        setTimeStr(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 p-3 px-4 rounded-2xl glass-card border border-primary/10 text-xs">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="font-semibold text-foreground">Available for Engineering Roles & Collaborations</span>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground text-[11px] font-mono">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-primary" />
          <span>Mumbai, India (IST)</span>
        </div>
        <div className="flex items-center gap-1 font-semibold text-foreground">
          <Clock className="w-3 h-3 text-primary" />
          <span>{timeStr || "Loading..."}</span>
        </div>
      </div>
    </div>
  );
}
