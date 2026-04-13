import { ArrowRight, Sparkles } from "lucide-react";
import AuroraBackground from "./animated-background";

export default function AuroraDemo() {
  return (
    <AuroraBackground>
      <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="mb-6 rounded-full overflow-hidden border-2 border-white/20 w-24 h-24">
          {/* Example placeholder Unsplash image satisfying the asset requirement */}
          <img 
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60" 
            alt="Aurora Landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="flex items-center gap-3 text-6xl font-bold text-white mb-4 tracking-tight">
          <Sparkles className="w-12 h-12 text-blue-400" />
          Aurora Magic
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          Experience the mesmerizing beauty of dancing lights.
        </p>
        
        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
          Explore More
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </AuroraBackground>
  );
}
