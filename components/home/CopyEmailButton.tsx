"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { ctaVariants } from "@/components/ui/cta";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className={ctaVariants({ variant: "outline" })}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {copied ? "Copied" : "Copy address"}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
