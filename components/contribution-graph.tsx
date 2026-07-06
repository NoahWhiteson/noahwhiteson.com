type Day = { date: string; count: number; level: number };

async function getContributions(): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/NoahWhiteson?y=last",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return {
      days: data.contributions as Day[],
      total: (data.total?.lastYear as number) ?? 0,
    };
  } catch {
    return null;
  }
}

const levelClasses = [
  "fill-muted",
  "fill-foreground/25",
  "fill-foreground/45",
  "fill-foreground/70",
  "fill-foreground",
];

const CELL = 10;
const GAP = 3;

export async function ContributionGraph() {
  const data = await getContributions();
  if (!data) {
    return (
      <p className="px-4 py-4 font-mono text-xs text-muted-foreground sm:px-6">
        Could not load contributions right now.
      </p>
    );
  }

  const weeks: Day[][] = [];
  for (let i = 0; i < data.days.length; i += 7) {
    weeks.push(data.days.slice(i, i + 7));
  }

  const width = weeks.length * (CELL + GAP) - GAP;
  const height = 7 * (CELL + GAP) - GAP;

  return (
    <div className="px-4 py-4 sm:px-6">
      <div className="overflow-x-auto">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="contrib-graph block"
          role="img"
          aria-label="GitHub contribution graph"
        >
          {weeks.map((week, wi) =>
            week.map((day, di) => (
              <rect
                key={day.date}
                x={wi * (CELL + GAP)}
                y={di * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx={2}
                className={`contrib-cell ${levelClasses[day.level] ?? levelClasses[0]}`}
              >
                <title>{`${day.date}: ${day.count} contributions`}</title>
              </rect>
            ))
          )}
        </svg>
      </div>
      <div className="flex items-center justify-between pt-3">
        <p className="font-mono text-xs text-muted-foreground">
          {data.total.toLocaleString()} contributions in the past year
        </p>
        <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <span>Less</span>
          {levelClasses.map((cls) => (
            <svg key={cls} width="10" height="10" className="shrink-0">
              <rect width="10" height="10" rx="2" className={cls} />
            </svg>
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
