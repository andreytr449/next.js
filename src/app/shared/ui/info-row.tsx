import React from "react";

export function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-baseline py-3 border-b border-zinc-800/60">
      <span className="text-xs text-zinc-500 tracking-wide">{label}</span>
      <span className="text-sm text-zinc-300 text-right max-w-xs">{value}</span>
    </div>
  );
}
