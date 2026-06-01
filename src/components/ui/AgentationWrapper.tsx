"use client";
import { Agentation } from "agentation";

function copyFallback(text: string) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

export default function AgentationWrapper() {
  const handleCopy = (markdown: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(markdown).catch(() => copyFallback(markdown));
    } else {
      copyFallback(markdown);
    }
  };

  return <Agentation copyToClipboard={false} onCopy={handleCopy} />;
}
