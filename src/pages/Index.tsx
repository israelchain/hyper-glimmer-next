import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { MarketHeader } from "@/components/MarketHeader";
import { ChartArea } from "@/components/ChartArea";
import { OrderBook } from "@/components/OrderBook";
import { TradingPanel } from "@/components/TradingPanel";

const Index = () => {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <Navigation />
      <MarketHeader />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <ChartArea />
        <OrderBook />
        <TradingPanel />
      </div>
    </div>
  );
};

export default Index;
