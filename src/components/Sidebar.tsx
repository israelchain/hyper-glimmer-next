import { TrendingUp, Pencil, MousePointer, Layers, Settings, Smile, Star, Home, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const tools = [
    { icon: Star, active: true },
    { icon: MousePointer, active: false },
    { icon: Pencil, active: false },
    { icon: Layers, active: false },
    { icon: TrendingUp, active: false },
    { icon: Settings, active: false },
    { icon: Smile, active: false },
    { icon: Home, active: false },
    { icon: Search, active: false },
    { icon: HelpCircle, active: false },
  ];

  return (
    <div className="w-12 bg-card border-r border-border flex flex-col items-center py-4 gap-2">
      {tools.map((Tool, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className={`w-8 h-8 ${
            Tool.active
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Tool.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
};
