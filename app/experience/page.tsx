import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { AuroraBackground } from "@/components/aurora-background";
import { BackgroundLines } from "@/components/background-lines";
import { CloudShader } from "@/components/cloud-shader";

export const metadata = { title: "Experience — NEXUS Festival" };

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">The Experience</h1>
          <p className="text-gray-400">More than just a music festival</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Immersive Stages</h2>
            <p className="text-gray-400">
              Four unique stages, each with its own atmosphere and sound system.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Visual Spectacle</h2>
            <p className="text-gray-400">
              State-of-the-art lighting and visual effects that bring the music to life.
            </p>
          </div>
        </div>

        <AnimatedTestimonials />
      </div>
    </div>
  );
}
