import { Button } from "./ui/button";
import { Flame, Users, TrendingUp, Zap, AlertTriangle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Sharp geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-red-600 transform skew-y-3"></div>
        <div className="absolute bottom-0 right-0 w-full h-16 bg-white transform -skew-y-3"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-600/20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/5 transform -rotate-45"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-red-600 border-4 border-white transform -rotate-2 mb-8 shadow-[8px_8px_0px_0px_theme(colors.white)]">
            <AlertTriangle className="w-8 h-8 text-white" />
            <span className="text-white font-black uppercase tracking-wide text-xl">LAST WARNING</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl text-white mb-6 leading-none font-black uppercase">
            Stop Being
            <span className="block text-red-500 transform skew-x-6">
              MEDIOCRE
            </span>
            <span className="block text-white text-4xl lg:text-5xl">
              Start Dominating Your Market
            </span>
          </h2>
          
          <div className="bg-white p-8 border-4 border-red-600 transform rotate-1 max-w-4xl mx-auto mb-12 shadow-[12px_12px_0px_0px_theme(colors.red.600)]">
            <p className="text-2xl text-black leading-tight font-black">
              Every day you wait is another day your competitors gain ground. 
              This assessment will show you EXACTLY how to stop playing catch-up and start leading your industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-16 py-6 border-4 border-white shadow-[8px_8px_0px_0px_theme(colors.black)] hover:shadow-[6px_6px_0px_0px_theme(colors.black)] transition-all duration-200 transform hover:translate-x-1 hover:translate-y-1 font-black uppercase tracking-wide text-xl"
            >
              DOMINATE OR DIE
              <Flame className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Aggressive social proof */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 border-2 border-white/20 transform -rotate-2">
              <div className="w-16 h-16 bg-red-600 border-4 border-white flex items-center justify-center mx-auto mb-4 transform rotate-45">
                <Users className="w-8 h-8 text-white transform -rotate-45" />
              </div>
              <div className="text-3xl text-white mb-2 font-black">500+</div>
              <div className="text-gray-300 font-bold uppercase text-sm">BUSINESSES TRANSFORMED</div>
            </div>

            <div className="bg-red-600/20 backdrop-blur-sm p-6 border-2 border-red-600 transform rotate-1">
              <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mx-auto mb-4 transform rotate-45">
                <TrendingUp className="w-8 h-8 text-red-600 transform -rotate-45" />
              </div>
              <div className="text-3xl text-white mb-2 font-black">312%</div>
              <div className="text-gray-300 font-bold uppercase text-sm">AVERAGE ROI INCREASE</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 border-2 border-white/20 transform -rotate-1">
              <div className="w-16 h-16 bg-red-600 border-4 border-white flex items-center justify-center mx-auto mb-4 transform rotate-45">
                <Zap className="w-8 h-8 text-white transform -rotate-45" />
              </div>
              <div className="text-3xl text-white mb-2 font-black">24HR</div>
              <div className="text-gray-300 font-bold uppercase text-sm">TO IMPLEMENTATION</div>
            </div>
          </div>

          {/* Guarantee - Aggressive */}
          <div className="bg-red-600 p-8 border-4 border-white transform -rotate-1 shadow-[12px_12px_0px_0px_theme(colors.black)]">
            <div className="bg-black p-4 border-2 border-white inline-block mb-4 transform rotate-2">
              <h3 className="text-xl text-red-500 font-black uppercase">
                MONEY-BACK GUARANTEE
              </h3>
            </div>
            <p className="text-white leading-tight font-bold text-lg max-w-3xl mx-auto">
              If this assessment doesn't reveal at least 3 specific ways to increase your revenue with AI, 
              I'll personally refund every penny AND give you a free 1-on-1 strategy session. 
              <span className="block mt-2 text-black font-black uppercase">
                That's how confident I am this will change your business.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}