const rows = [
  { actor: "Finance user", action: "Post journal entry", controls: "Role-based access · Approval strategy", result: "Posted", ok: true },
  { actor: "AI agent", action: "Post journal entry", controls: "Role-based access · Approval strategy", result: "Posted", ok: true },
  { actor: "AI agent", action: "Post to a closed period", controls: "Posting period restriction", result: "Blocked", ok: false },
] as const;

/**
 * An illustration of the point SAP makes about governance: when an AI agent
 * acts inside the ERP it meets the same controls as a person, and its actions
 * land in the change log in the same shape. The rows are examples chosen to
 * show that, not captured output. Rendered on the server; the rows slide in.
 */
export function AuditLog() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#04100b] shadow-[0_40px_90px_-50px_rgba(127,217,180,0.5)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">ERP change log</span>
        <span className="ml-auto rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/45">
          Illustrative
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] text-left">
          <thead>
            <tr className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              <th scope="col" className="px-6 py-3.5">Actor</th>
              <th scope="col" className="px-6 py-3.5">Action</th>
              <th scope="col" className="px-6 py-3.5">Controls applied</th>
              <th scope="col" className="px-6 py-3.5 text-right">Result</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className="sap-row-in border-t border-white/[0.07] text-sm"
                style={{ animationDelay: `${0.3 + i * 0.45}s` }}
              >
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 font-semibold text-white">
                    <span className={`h-1.5 w-1.5 rounded-full ${r.actor === "AI agent" ? "bg-[#7fd9b4] shadow-[0_0_8px_#7fd9b4]" : "bg-white/40"}`} />
                    {r.actor}
                  </span>
                </td>
                <td className="px-6 py-4 text-white/75">{r.action}</td>
                <td className="px-6 py-4 text-white/55">{r.controls}</td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      r.ok ? "bg-[#7fd9b4]/10 text-[#7fd9b4]" : "bg-white/[0.06] text-white/70"
                    }`}
                  >
                    {r.result} · logged
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-white/10 px-6 py-3.5 text-[11px] leading-relaxed text-white/40">
        Example rows to show the idea that a person and an AI agent leave the same kind of record, not output from a real system.
      </p>
    </div>
  );
}
