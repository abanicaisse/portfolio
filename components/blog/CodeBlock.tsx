"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <figure className="my-8 overflow-hidden border border-line bg-code">
      <figcaption className="flex items-center justify-between border-b border-code-line bg-code-bar px-4 py-2">
        <span className="hud-label text-code-muted">{language}</span>
        <button
          type="button"
          onClick={copy}
          className="hud-label flex items-center gap-1.5 px-2 py-1 text-code-muted transition-colors hover:text-code-fg"
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </figcaption>
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed md:text-sm">
        <SyntaxHighlighter
          PreTag="div"
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: 0, background: "transparent" }}
          codeTagProps={{ className: "font-mono" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </figure>
  );
}
