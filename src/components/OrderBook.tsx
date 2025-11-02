export const OrderBook = () => {
  const bids = [
    { price: "3 890,3", size: "35 022", total: "2 689 474" },
    { price: "3 890,2", size: "657 926", total: "2 654 452" },
    { price: "3 890,1", size: "353 631", total: "1 996 527" },
    { price: "3 890,0", size: "145 381", total: "1 642 896" },
    { price: "3 889,9", size: "424 395", total: "1 497 515" },
    { price: "3 889,8", size: "341 237", total: "1 073 119" },
    { price: "3 889,7", size: "409", total: "731 883" },
    { price: "3 889,6", size: "250 195", total: "731 474" },
    { price: "3 889,5", size: "235 408", total: "481 279" },
    { price: "3 889,4", size: "225 054", total: "245 871" },
  ];

  const asks = [
    { price: "3 889,3", size: "20 817", total: "20 817" },
    { price: "3 889,2", size: "857 787", total: "857 787" },
    { price: "3 889,1", size: "125 261", total: "983 048" },
    { price: "3 889,0", size: "30 065", total: "1 013 114" },
    { price: "3 888,9", size: "25 056", total: "1 038 169" },
    { price: "3 888,7", size: "30 088", total: "1 068 257" },
    { price: "3 888,6", size: "909 193", total: "1 977 451" },
    { price: "3 888,5", size: "9 533", total: "1 986 984" },
    { price: "3 888,4", size: "46 391", total: "2 033 375" },
    { price: "3 888,3", size: "420 011", total: "2 453 386" },
  ];

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-foreground">Order Book</h3>
          <span className="text-xs text-muted-foreground">Trades</span>
        </div>
        <select className="bg-transparent text-xs text-muted-foreground border-none">
          <option>0.1</option>
        </select>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-3 gap-2 px-4 py-2 text-xs text-muted-foreground border-b border-border">
          <div>Price</div>
          <div className="text-right">Size (USDC)</div>
          <div className="text-right">Total (USDC)</div>
        </div>

        {/* Asks (sell orders) */}
        <div className="space-y-px">
          {[...asks].reverse().map((ask, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-2 px-4 py-1 text-xs font-mono relative group hover:bg-destructive/5"
            >
              <div
                className="absolute inset-y-0 right-0 bg-destructive/10"
                style={{ width: `${Math.random() * 60 + 20}%` }}
              />
              <div className="text-destructive relative z-10">{ask.price}</div>
              <div className="text-foreground text-right relative z-10">{ask.size}</div>
              <div className="text-muted-foreground text-right relative z-10">{ask.total}</div>
            </div>
          ))}
        </div>

        {/* Spread indicator */}
        <div className="px-4 py-3 bg-muted/30 border-y border-border">
          <div className="flex items-center justify-between text-xs">
            <span className="text-primary font-mono font-semibold">3,889.2</span>
            <div className="text-muted-foreground">
              <span>Spread</span>
              <span className="ml-2 font-mono">0,1</span>
              <span className="ml-1">0,003%</span>
            </div>
          </div>
        </div>

        {/* Bids (buy orders) */}
        <div className="space-y-px">
          {bids.map((bid, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-2 px-4 py-1 text-xs font-mono relative group hover:bg-success/5"
            >
              <div
                className="absolute inset-y-0 right-0 bg-success/10"
                style={{ width: `${Math.random() * 60 + 20}%` }}
              />
              <div className="text-success relative z-10">{bid.price}</div>
              <div className="text-foreground text-right relative z-10">{bid.size}</div>
              <div className="text-muted-foreground text-right relative z-10">{bid.total}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
