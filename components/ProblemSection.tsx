import { Skull, Clock, DollarSign, Target, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 bg-white relative">
      {/* Sharp dividers */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-black transform skew-y-1"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-red-600 transform -skew-y-1"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-red-600 border-4 border-black transform -rotate-2 mb-8 shadow-[6px_6px_0px_0px_theme(colors.black)]">
            <Skull className="w-6 h-6 text-white" />
            <span className="text-white font-black uppercase tracking-wide">BRUTAL TRUTH</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl text-black mb-8 max-w-4xl mx-auto leading-none font-black uppercase">
            You're a 
            <span className="text-red-600 transform inline-block -skew-x-12"> Productivity</span>
            <br />
            <span className="text-red-600">FRAUD</span>
            <br />
            Pretending to Work
          </h2>
          
          <div className="bg-black p-6 border-4 border-red-600 transform rotate-1 max-w-3xl mx-auto">
            <p className="text-xl text-white leading-tight font-bold">
              While you play with ChatGPT prompts and test every shiny new AI tool, 
              your competitors are building SYSTEMS that print money. Wake up.
            </p>
          </div>
        </div>

        {/* Problem Cards - Brutal Style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black p-8 border-4 border-white shadow-[8px_8px_0px_0px_theme(colors.red.600)] transform -rotate-1">
            <div className="w-16 h-16 bg-red-600 border-2 border-white flex items-center justify-center mb-6 transform rotate-45">
              <Clock className="w-8 h-8 text-white transform -rotate-45" />
            </div>
            <h3 className="text-white mb-4 font-black uppercase text-xl">TIME VAMPIRE</h3>
            <p className="text-gray-300 leading-tight font-bold">
              You're bleeding hours playing with toys while your business stagnates. 
              Every minute wasted is money your competitor is making.
            </p>
          </div>

          <div className="bg-red-600 p-8 border-4 border-black shadow-[8px_8px_0px_0px_theme(colors.white)] transform rotate-1">
            <div className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center mb-6 transform rotate-45">
              <DollarSign className="w-8 h-8 text-red-600 transform -rotate-45" />
            </div>
            <h3 className="text-white mb-4 font-black uppercase text-xl">REVENUE KILLER</h3>
            <p className="text-white leading-tight font-bold">
              Your "research" is costing you $10K+ monthly. Others are scaling 
              with strategic AI while you're stuck in tutorial hell.
            </p>
          </div>

          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_theme(colors.red.600)] transform -rotate-1">
            <div className="w-16 h-16 bg-red-600 border-2 border-black flex items-center justify-center mb-6 transform rotate-45">
              <Target className="w-8 h-8 text-white transform -rotate-45" />
            </div>
            <h3 className="text-black mb-4 font-black uppercase text-xl">FOCUS DESTROYER</h3>
            <p className="text-black leading-tight font-bold">
              Scattered attention = scattered results. You need a laser-focused 
              strategy, not another "productivity hack."
            </p>
          </div>
        </div>

        {/* Call to Action - Aggressive */}
        <div className="text-center bg-black p-12 border-4 border-red-600 transform -rotate-1 shadow-[12px_12px_0px_0px_theme(colors.white)]">
          <div className="bg-red-600 p-4 border-2 border-white inline-block mb-6 transform rotate-2">
            <h3 className="text-2xl text-white font-black uppercase">
              STOP THE MADNESS
            </h3>
          </div>
          
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto font-bold leading-tight">
            Get a ruthless audit of where you're hemorrhaging time and money. 
            This assessment will show you EXACTLY what to stop doing and what to start building.
          </p>
          
          <div className="inline-flex items-center space-x-3 bg-white text-black px-6 py-3 border-2 border-black font-black uppercase tracking-wide">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span>YOUR WAKE-UP CALL AWAITS</span>
          </div>
        </div>
      </div>
    </section>
  );
}