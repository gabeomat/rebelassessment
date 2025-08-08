import { Zap, ArrowRight, Eye, Target } from "lucide-react";
import { Button } from "./ui/button";

export function AssessmentPreview() {
  const brutalities = [
    {
      title: "YOUR BRUTAL AI AUDIT",
      description: "We'll expose exactly where you're bleeding time and money on useless AI experiments"
    },
    {
      title: "BUSINESS MODEL BREAKDOWN", 
      description: "Get the harsh truth about which AI tools actually fit your business (spoiler: not many)"
    },
    {
      title: "NO-BS IMPLEMENTATION PLAN",
      description: "A ruthless roadmap that prioritizes profit over playing with shiny new tools"
    },
    {
      title: "CLIENT EXPERIENCE REALITY CHECK",
      description: "Stop guessing. Learn which AI actually improves client results vs. just looks cool"
    }
  ];

  return (
    <section className="py-24 bg-red-600 relative">
      {/* Aggressive geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-8 bg-black transform skew-y-2"></div>
        <div className="absolute bottom-0 right-0 w-full h-8 bg-white transform -skew-y-2"></div>
        <div className="absolute top-1/3 left-0 w-32 h-full bg-black/10 transform -skew-x-12"></div>
        <div className="absolute top-1/4 right-0 w-24 h-full bg-white/10 transform skew-x-12"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Brutal Benefits */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-black border-4 border-white transform rotate-2 mb-8 shadow-[6px_6px_0px_0px_theme(colors.white)]">
                <Eye className="w-6 h-6 text-red-500" />
                <span className="text-white font-black uppercase tracking-wide">TRUTH SERUM</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl text-white mb-6 leading-none font-black uppercase">
                What This
                <span className="block text-black transform -skew-x-6">
                  ASSESSMENT
                </span>
                <span className="block text-white">
                  Will Expose
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {brutalities.map((brutality, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black border-2 border-white flex items-center justify-center mt-1 transform rotate-45">
                    <Zap className="w-4 h-4 text-red-500 transform -rotate-45" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 border-2 border-white/20">
                    <h3 className="text-white mb-2 font-black uppercase text-lg">{brutality.title}</h3>
                    <p className="text-white/90 leading-tight font-bold">{brutality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Aggressive Assessment Preview */}
          <div className="relative">
            <div className="bg-black p-8 border-4 border-white shadow-[12px_12px_0px_0px_theme(colors.white)] transform -rotate-2">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 border-4 border-white flex items-center justify-center mx-auto mb-4 transform rotate-45">
                    <Target className="w-10 h-10 text-white transform -rotate-45" />
                  </div>
                  <div className="bg-white text-black p-3 border-2 border-red-600 transform rotate-1">
                    <h3 className="text-xl font-black uppercase">REALITY CHECK TIME</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 border-2 border-red-600">
                    <p className="text-black mb-3 font-black uppercase text-sm">"How much are you ACTUALLY making?"</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <span className="text-black font-bold">$100K - Still struggling</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-red-600 p-2">
                        <div className="w-4 h-4 bg-white"></div>
                        <span className="text-white font-bold">$250K - Getting serious</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <span className="text-black font-bold">$500K+ - Time to scale</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-600 p-4 border-2 border-white">
                    <p className="text-white mb-3 font-black uppercase text-sm">"Hours wasted on AI toys weekly?"</p>
                    <div className="bg-black h-4 border-2 border-white">
                      <div className="bg-white h-full w-2/3 border-r-2 border-red-600"></div>
                    </div>
                    <p className="text-white/80 text-xs mt-1 font-bold">TOO DAMN MANY</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-white hover:bg-gray-100 text-black border-4 border-red-600 shadow-[6px_6px_0px_0px_theme(colors.red.600)] hover:shadow-[4px_4px_0px_0px_theme(colors.red.600)] transition-all duration-200 transform hover:translate-x-1 hover:translate-y-1 font-black uppercase tracking-wide"
                >
                  AUDIT MY BUSINESS NOW
                </Button>
              </div>
            </div>

            {/* Aggressive floating elements */}
            <div className="absolute -top-6 -right-6 bg-white text-black px-4 py-2 border-4 border-black font-black uppercase text-sm transform -rotate-12 shadow-[4px_4px_0px_0px_theme(colors.red.600)]">
              ZERO BS
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-black text-red-500 p-4 border-4 border-white font-black uppercase transform rotate-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 animate-pulse"></div>
                <span>UNFILTERED TRUTH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}