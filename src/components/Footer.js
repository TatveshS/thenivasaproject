"use client";

import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground/[0.02] py-20 px-6 border-t border-foreground/[0.05]">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <div className="text-center">
                    <h4 className="font-display text-3xl font-bold text-primary mb-4">The Nivasa Project</h4>
                    <p className="text-sm text-foreground/70 font-light max-w-xs mx-auto">
                        Made with ❤️ for builders in Agonda, South Goa.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-foreground/30 hover:text-primary transition-colors p-3 bg-foreground/[0.03] rounded-full">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:trsawant01@gmail.com" className="text-foreground/30 hover:text-primary transition-colors p-3 bg-foreground/[0.03] rounded-full">
                        <Mail size={20} />
                    </a>
                    <a href="https://share.google/8OIfcFxoEYkB5UFah" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-primary transition-colors p-3 bg-foreground/[0.03] rounded-full">
                        <MapPin size={20} />
                    </a>
                </div>

                <div className="flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-foreground/60">
                    <span>WhatsApp: +91 70661 95446</span>
                    <span>Email: trsawant01@gmail.com</span>
                </div>

                <div className="text-[10px] text-foreground/40 mt-4">
                    © {new Date().getFullYear()} The Nivasa Project. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
