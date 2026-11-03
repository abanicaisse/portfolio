"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareBarProps {
  /** Path of the page being shared, e.g. "/projects". */
  path: string;
  title: string;
  className?: string;
}

const cell =
  "hud-label inline-flex h-9 w-full items-center justify-center gap-2 bg-surface px-3 text-ink-muted transition-colors hover:bg-invert-bg hover:text-invert-fg sm:w-fit";

export function ShareBar({ path, title, className }: ShareBarProps) {
  const [url, setUrl] = useState(path);
  const [copied, setCopied] = useState(false);

  useEffect(() => setUrl(new URL(path, window.location.origin).toString()), [path]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const targets = [
    { label: "X", name: "Share on X", href: `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}` },
    {
      label: "LinkedIn",
      name: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Reddit",
      name: "Share on Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ];

  return (
    <div className={cn("grid grid-cols-2 gap-px border border-line bg-line sm:flex sm:w-fit", className)}>
      <span className="hud-label col-span-2 flex h-9 items-center justify-center bg-surface px-3 text-ink-faint sm:col-span-1">Share</span>
      <button type="button" onClick={copy} className={cell}>
        {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
      </button>
      {targets.map((target) => (
        <a
          key={target.label}
          href={target.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={target.name}
          className={cell}
        >
          {target.label}
        </a>
      ))}
    </div>
  );
}
