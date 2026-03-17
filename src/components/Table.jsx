export function Table({ columns, rows, rowKey, emptyText = 'No data' }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-50">
              {columns.map((c) => (
                <th
                  key={c.key}
                  className="whitespace-nowrap border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600"
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-10 text-center text-sm text-slate-500" colSpan={columns.length}>
                  {emptyText}
                </td>
              </tr>
            ) : (
              rows.map((r, idx) => (
                <tr key={typeof rowKey === 'function' ? rowKey(r) : r[rowKey] ?? idx} className="hover:bg-slate-50/60">
                  {columns.map((c) => (
                    <td key={c.key} className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700">
                      {c.render ? c.render(r) : r[c.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

