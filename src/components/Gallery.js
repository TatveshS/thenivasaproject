"use client";

import { motion } from "framer-motion";
import BASE_PATH from "@/lib/basePath";

const features = [
    {
        title: "Remote Work Setup",
        description: "Calm work environment with high-speed 5G internet and ergonomic seating.",
        image: `${BASE_PATH}/room/wfh.JPG`
    },
    {
        title: "Beach Lifestyle",
        description: <><a href="https://share.google/8OIfcFxoEYkB5UFah" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">Agonda beach</a> is just 400 meters away for your morning swims or sunset walks.</>,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPY0gHLGM-K35Kd8jxJAT1yo6k56DlxqxU3c7dFBND2AlxbNGm2ViUxf0_YkM93Z9xVQV0FQvfF9YNAhtgzTpPLqumfVvKqbDwkkA1_HJRmRaJ0UQENDcZHD4aWmU-_CGR8nBzKiIcca6jbVrqGOEhhpdjJ4NA5epAty7GWBieQcdxCjAJfPipYYvmIWrTLK7DwVooSgBkED7IXy7DovHjts4mU24dqV00YBADP4sUiPHopEIxME7Tux6S9dfx82xk99agbOXK4A"
    },
    {
        title: "Nature & Wildlife",
        description: "Lush forests, exotic birds, and secret waterfalls are all around you.",
        image: `${BASE_PATH}/room/nature.png`
    },
    {
        title: "Free Weekends Trip",
        description: "Explore hidden gems, secret waterfalls, and pristine beaches of Goa every weekend.",
        image: `${BASE_PATH}/community/farm.jpg`
    },
    {
        title: "Community Kitchen",
        description: "Get free home-style meals and a fully equipped kitchen to cook your favorite dishes with friends.",
        image: `${BASE_PATH}/room/kitchen_people.png`
    }
];

export default function Gallery() {
    return (
        <section className="pb-24 pt-4 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 shadow-2xl">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-foreground/60 leading-relaxed font-light">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
