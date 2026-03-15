const Bone = ({ className = "", style = {} }) => (
  <div className={`skeleton-bone ${className}`} style={style} />
);

export default function MovieDetailsLoading() {
  return (
    <>
      <style>{`
    @keyframes shimmer {
      0%   { background-position: -600px 0; }
      100% { background-position:  600px 0; }
    }
    .skeleton-bone {
      background: linear-gradient(
        90deg,
        rgba(255,255,255,0.04) 25%,
        rgba(255,255,255,0.08) 50%,
        rgba(255,255,255,0.04) 75%
      );
      background-size: 600px 100%;
      animation: shimmer 1.6s infinite linear;
      border-radius: 4px;
    }
  `}</style>

      <div className="bg-black text-white min-h-screen font-sans">
        {/* Hero */}
        <div className="relative w-full h-[500px] overflow-hidden bg-zinc-950">
          <Bone className="absolute inset-0 !rounded-none opacity-60" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black" />

          <div className="relative z-10 flex items-end h-full px-10 pb-10 gap-8">
            <Bone
              style={{
                width: 128,
                height: 192,
                borderRadius: 8,
                flexShrink: 0,
              }}
            />

            <div className="flex flex-col gap-3">
              <Bone style={{ width: 120, height: 10 }} />
              <Bone style={{ width: 320, height: 52, borderRadius: 3 }} />

              <div className="flex gap-2">
                {[64, 52, 72].map((w, i) => (
                  <Bone
                    key={i}
                    style={{ width: w, height: 26, borderRadius: 999 }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Bone style={{ width: 36, height: 10 }} />
                <Bone style={{ width: 4, height: 4, borderRadius: "50%" }} />
                <Bone style={{ width: 52, height: 10 }} />
                <Bone style={{ width: 4, height: 4, borderRadius: "50%" }} />
                <Bone style={{ width: 60, height: 10 }} />
                <Bone style={{ width: 32, height: 20, borderRadius: 4 }} />
                <Bone style={{ width: 32, height: 20, borderRadius: 4 }} />
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 py-12 max-w-5xl mx-auto">
          <div className="mb-12">
            <Bone style={{ width: 72, height: 9, marginBottom: 16 }} />
            <div className="flex flex-col gap-2 max-w-2xl">
              {[100, 96, 88, 72].map((w, i) => (
                <Bone key={i} style={{ width: `${w}%`, height: 13 }} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <div className="bg-zinc-900 p-5 border border-zinc-800 rounded-xl">
              <Bone style={{ width: 52, height: 9, marginBottom: 14 }} />
              <div className="flex items-center gap-3">
                <Bone style={{ width: 56, height: 56, borderRadius: "50%" }} />
                <div className="flex flex-col gap-2">
                  <Bone style={{ width: 40, height: 22 }} />
                  <Bone style={{ width: 64, height: 9 }} />
                </div>
              </div>
            </div>

            {["Budget", "Revenue", "Popularity"].map((_, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-5 border border-zinc-800 rounded-xl"
              >
                <Bone
                  style={{ width: 48 + i * 10, height: 9, marginBottom: 12 }}
                />
                <Bone style={{ width: 56, height: 26, marginBottom: 6 }} />
                <Bone style={{ width: 80, height: 9 }} />
              </div>
            ))}
          </div>

          <hr className="border-zinc-800/50 mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
            <div>
              <Bone style={{ width: 44, height: 9, marginBottom: 12 }} />
              {[100, 88, 76, 100, 64, 80].map((w, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 border-b border-zinc-800/60"
                >
                  <Bone style={{ width: w * 0.38, height: 9 }} />
                  <Bone style={{ width: w, height: 11 }} />
                </div>
              ))}
            </div>

            <div>
              <Bone style={{ width: 64, height: 9, marginBottom: 12 }} />
              {[148, 120, 100, 132].map((w, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 border-b border-zinc-800/60"
                >
                  <Bone style={{ width: w, height: 11 }} />
                  <Bone style={{ width: 30, height: 20, borderRadius: 4 }} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-zinc-800/40">
            <Bone style={{ width: 90, height: 9 }} />
            <Bone style={{ width: 80, height: 28, borderRadius: 999 }} />
          </div>
        </div>
      </div>
    </>
  );
}
