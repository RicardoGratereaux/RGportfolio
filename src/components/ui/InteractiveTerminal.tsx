"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

type Command = {
  input: string;
  output: React.ReactNode;
};

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: (
        <span className="text-zinc-400">
          Welcome to the portfolio terminal. Type{" "}
          <span className="text-primary font-bold">help</span> to see available commands.
        </span>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 text-zinc-400">
            <div><span className="text-primary">about</span> - Who am I?</div>
            <div><span className="text-primary">skills</span> - View technical skills</div>
            <div><span className="text-primary">projects</span> - List of projects</div>
            <div><span className="text-primary">clear</span> - Clear terminal history</div>
          </div>
        );
        break;
      case "about":
        output = "Ricardo Gratereaux - Full Stack Software Developer. Passionate about modern, fast, and scalable applications.";
        break;
      case "skills":
        output = "Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Node.js";
        break;
      case "projects":
        output = "1. Full Stack Ecommerce (Next.js, Stripe, PostgreSQL)";
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        return;
      default:
        output = <span className="text-red-400">Command not found: {trimmedCmd}</span>;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-zinc-900 border border-white/10 rounded-full shadow-lg text-primary hover:text-white transition-colors"
      >
        <TerminalIcon className="w-6 h-6" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm sm:max-w-md bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900/50">
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center group"><X className="w-2 h-2 opacity-0 group-hover:opacity-100" /></button>
                <button className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 flex items-center justify-center group"><Minus className="w-2 h-2 opacity-0 group-hover:opacity-100" /></button>
                <button className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 flex items-center justify-center group"><Square className="w-2 h-2 opacity-0 group-hover:opacity-100" /></button>
              </div>
              <span className="text-xs font-mono text-zinc-500">ricardo@portfolio:~</span>
              <div className="w-16" /> {/* Spacer */}
            </div>

            {/* Body */}
            <div
              ref={scrollRef}
              className="p-4 h-64 overflow-y-auto font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex flex-col gap-3">
                {history.map((cmd, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400">~</span>
                      <span>{cmd.input}</span>
                    </div>
                    <div className="text-zinc-300 ml-5 leading-relaxed">{cmd.output}</div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={onSubmit} className="flex items-center gap-2 mt-3 text-zinc-300">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-zinc-300 placeholder:text-zinc-700"
                  spellCheck={false}
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
