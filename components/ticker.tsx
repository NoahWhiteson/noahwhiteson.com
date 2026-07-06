const ITEMS = [
  "NOAH WHITESON",
  "FULL-STACK PROGRAMMER",
  "TORONTO, CANADA",
  "REACT + PYTHON",
  "ALWAYS BUILDING",
  "SMALL DETAILS MATTER",
];

function TickerHalf() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-4 font-mono text-xs tracking-widest text-muted-foreground">
            {item}
          </span>
          <span className="text-muted-foreground/50">·</span>
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="screen-line-before overflow-hidden py-2.5">
      <div data-ticker className="flex w-max">
        <TickerHalf />
        <TickerHalf />
      </div>
    </div>
  );
}
