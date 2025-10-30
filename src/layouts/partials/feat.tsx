// Minimalist Feature Component Re-Targeted for SMEs & Startups (No Links, Lucide Icons)

import React from 'react';
// Using Lucide Icons for a clean, non-filled appearance
import { Bolt, DollarSign, TrendingUp, Shield } from 'lucide-react';
// NOTE: You must have 'lucide-react' installed in your project: npm install lucide-react

// --- TARGETED DATA ---
const featuresData = [
    {
        icon: DollarSign, // Lucide Icon for finance/cost
        title: "Fixed-Cost Sprints",
        content: "Predictable, transparent pricing eliminates budget overruns, ensuring your seed capital goes further. Pay for results, not hours.",
    },
    {
        icon: TrendingUp, // Lucide Icon for growth/ROI
        title: "Rapid Market Launch (MVP)",
        content: "We focus on Minimum Viable Products for quick deployment, letting you validate ideas and start generating revenue fast.",
    },
    {
        icon: Bolt, // Lucide Icon for speed/agility
        title: "Decisive Agility",
        content: "Small, dedicated teams mean zero bureaucracy. Get direct access to developers and push critical changes immediately.",
    },
    {
        icon: Shield, // Lucide Icon for security/risk
        title: "Compliance & Security",
        content: "Gulf market-ready solutions that cover regional data regulations (e.g., KSA, UAE) from day one, minimizing legal risk.",
    },
];


const FeatureGrid = ({ features = featuresData }) => {

    return (
        <section className="py-16 md:py-28  bg-theme-light dark:bg-darkmode-theme-light">
             <div className="absolute top-[-60px] left-[-40px] w-[200px] h-[200px] bg-primary/10 rounded-3xl rotate-[25deg]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-gray-200/20 rounded-3xl rotate-[-15deg]" />

            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
                    The Smart Way to Scale in the Gulf
                </h2>
                <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                    We focus on the metrics that matter most to early-stage businesses: **cost control, speed to market, and predictable growth.**
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.slice(0, 4).map((feature, index) => {
                        const IconComponent = feature.icon;

                        return (
                            <div
                                key={index}
                                className=" p-6 md:p-8 rounded-xl shadow-sm border border-gray-100
                                           hover:shadow-lg hover:border-primary transition-all duration-300
                                           flex flex-col text-left space-y-3"
                            >
                                <div className="text-primary mb-3">
                                    {IconComponent ? <IconComponent className="w-10 h-10" /> : <Shield className="w-10 h-10" />}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-base flex-grow">
                                    {feature.content}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
