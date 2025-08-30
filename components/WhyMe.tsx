import type React from "react";
import { Monitor, Zap, Layout, Headphones, Shield, Share2 } from "lucide-react";
import { GradientBlob } from "./ui/GradientBlob";
import { SlantedHeading } from "./ui/RoundedSlantHeading";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 text-white">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

export default function WhyMe() {
  return (
    <section className="relative pt-16 pb-24 overflow-x-clip">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <GradientBlob colors={["#10B981", "#14B8A6"]} size={500} blur={80} />
      </div>

      <SlantedHeading text="Why choose me?" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 mt-16">
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
            Delivering exceptional results with cutting-edge technology<br />
            and unmatched expertise in modern web development.
          </p>
        </div>

        <div className="bg-neutral-950/70 backdrop-blur-sm rounded-xl p-8 border-2 border-emerald-600/[0.15]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Monitor size={24} />}
              title="Modern Web Development"
              description="Build responsive, fast, and scalable websites using the latest technologies and best practices."
            />
            <Feature
              icon={<Zap size={24} />}
              title="AI-Powered Solutions"
              description="Leverage cutting-edge AI technology to automate tasks and enhance productivity across your business."
            />
            <Feature
              icon={<Layout size={24} />}
              title="Custom Automation"
              description="Streamline your workflows with tailored automation solutions that save time and reduce errors."
            />
            <Feature
              icon={<Headphones size={24} />}
              title="Dedicated Support"
              description="24/7 assistance throughout your project journey, from initial concept to final deployment."
            />
            <Feature
              icon={<Shield size={24} />}
              title="Secure & Reliable"
              description="Enterprise-grade security and robust architecture ensure your applications are safe and scalable."
            />
            <Feature
              icon={<Share2 size={24} />}
              title="Seamless Integration"
              description="Easy integration with your existing systems and smooth deployment across all platforms."
            />
          </div>
        </div>
      </div>
    </section>
  );
}