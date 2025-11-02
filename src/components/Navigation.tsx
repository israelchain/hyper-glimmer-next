import { ChevronDown, Settings, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="h-14 border-b border-border bg-card flex items-center justify-between px-4">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">H</span>
          </div>
          <span className="font-semibold text-foreground">Hyperliquid</span>
        </div>
        
        <div className="flex items-center gap-1">
          {["Trade", "Vaults", "Portfolio", "Staking", "Referrals", "Leaderboard"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              {item}
            </Button>
          ))}
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
            More <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          0xf0c7...6F41 <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Globe className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};
