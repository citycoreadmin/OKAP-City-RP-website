"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { copy, type Language } from "@/lib/content";
import { ui } from "@/lib/ui";

export const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });
export function useLanguage() { return useContext(LanguageContext); }
export function useCopy() { return copy[useLanguage().language]; }
export function useUi() { return ui[useLanguage().language]; }

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .65 }}>{children}</motion.div>;
}
