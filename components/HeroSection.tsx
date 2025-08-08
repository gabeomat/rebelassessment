import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import rebelMoodboard from 'figma:asset/c074bc9937ac20dae037e80a1765d0687a9960bc.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Sharp geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/20 transform rotate-45 blur-xl"></div>
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-white/5 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 transform rotate-12"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJub2lzZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI25vaXNlKSIvPgo8L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-600 border-2 border-white transform -rotate-1">
                <span className="text-white uppercase tracking-wider font-bold text-sm">WAKE UP CALL</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl leading-none text-white tracking-tight uppercase font-black">
                Stop Playing
                <span className="block text-red-500 transform -skew-x-6">
                  With AI Toys
                </span>
                <span className="block text-white text-5xl lg:text-6xl">
                  Start Building
                  <span className="text-red-500"> Empire</span>
                </span>
              </h1>
              
              <div className="bg-white p-6 border-4 border-black transform rotate-1 shadow-[8px_8px_0px_0px_theme(colors.red.500)]">
                <p className="text-xl text-black leading-tight font-bold">
                  You're wasting time chasing shiny AI tools while your competitors are using STRATEGY to dominate your market.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 border-4 border-white shadow-[6px_6px_0px_0px_theme(colors.black)] hover:shadow-[4px_4px_0px_0px_theme(colors.black)] transition-all duration-200 transform hover:translate-x-1 hover:translate-y-1 uppercase font-black tracking-wide"
              >
                TAKE THE DAMN ASSESSMENT
              </Button>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                3 minutes • No BS • Real results
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative w-full h-[600px] border-4 border-white transform -rotate-2 shadow-[12px_12px_0px_0px_theme(colors.red.600)]">
              <ImageWithFallback 
                src={rebelMoodboard}
                alt="Rebel business aesthetic moodboard"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-red-600 p-4 border-2 border-white">
                  <p className="text-white font-bold uppercase tracking-wide text-lg">
                    FOR REBELS ONLY
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 border-2 border-black font-black uppercase text-sm transform rotate-12">
              DISRUPT OR DIE
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-black text-red-500 p-4 border-2 border-white font-black uppercase transform -rotate-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 animate-pulse"></div>
                <span>REVOLUTION MODE: ON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}