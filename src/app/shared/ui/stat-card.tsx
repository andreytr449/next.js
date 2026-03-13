export function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub: string;
}) {
  return (
    <div className="bg-zinc-900 p-5 border border-zinc-800 rounded-xl">
      <p className="text-xs tracking-widest uppercase text-zinc-500 mb-2">
        {label}
      </p>
      <p className="text-2xl font-light text-white">{value}</p>
      {sub && <p className="text-xs text-zinc-600 mt-1">{sub}</p>}
    </div>
  );
}
