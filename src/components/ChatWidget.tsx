"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatCircle, X, PaperPlaneTilt, ArrowCounterClockwise, Sparkle } from "@phosphor-icons/react";

const ASSISTANT_NAME = "Spire";
const ASSISTANT_ROLE = "Ventura AI assistant";
const SUGGESTED_QUESTIONS = [
  "What fund structures do you administer?",
  "How long does a Delaware LP take to launch?",
  "How do you price fund administration?",
  "Do you support tokenized fund shares?",
];

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("ventura_chat") : null;
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ventura_chat", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isStreaming]);

  async function sendMessage(text: string) {
    if (!text.trim() || isStreaming) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) throw new Error("Chat request failed");

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === "content_block_delta" && data.delta?.text) {
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = {
                  ...copy[copy.length - 1],
                  content: copy[copy.length - 1].content + data.delta.text,
                };
                return copy;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm temporarily offline. Please use the contact form or email info@venturafs.com.",
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  }

  function reset() {
    setMessages([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("ventura_chat");
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-2xl md:bottom-8 md:right-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: open ? 0 : [1, 1.05, 1] }}
        transition={{
          scale: open
            ? { duration: 0.2 }
            : { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        }}
        aria-label={`Open ${ASSISTANT_NAME} AI assistant`}
      >
        <ChatCircle className="h-6 w-6" weight="fill" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-400 text-white shadow ring-2 ring-white">
          <Sparkle className="h-3 w-3" weight="fill" />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 flex h-[600px] max-h-[85vh] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:bottom-8 md:right-8"
          >
            <div className="flex items-center justify-between bg-brand-900 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700">
                  <SpireMark />
                </div>
                <div>
                  <p className="flex items-center gap-2 font-semibold">
                    {ASSISTANT_NAME}
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-brand-50">
                      <Sparkle className="h-2.5 w-2.5" weight="fill" />
                      AI
                    </span>
                  </p>
                  <p className="text-xs text-brand-300">{ASSISTANT_ROLE} . always-on</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={reset}
                    className="rounded p-2 text-brand-200 hover:bg-brand-800"
                    aria-label="New conversation"
                  >
                    <ArrowCounterClockwise className="h-4 w-4" weight="bold" />
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="rounded p-2 text-brand-200 hover:bg-brand-800"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" weight="bold" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto bg-brand-50/40 p-5">
              {messages.length === 0 ? (
                <div className="rounded-xl border border-brand-100 bg-white p-4 text-brand-900/80">
                  <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    <Sparkle className="h-3 w-3" weight="fill" />
                    AI assistant
                  </p>
                  <p>
                    Hi, I&apos;m {ASSISTANT_NAME}, an AI assistant for Ventura. Ask me about fund structures, services, fees, or how we work. I&apos;ll keep it short.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm ${
                          m.role === "user"
                            ? "bg-brand-700 text-white"
                            : "border border-brand-100 bg-white text-brand-900/85"
                        }`}
                      >
                        {m.content || (
                          <span className="inline-flex gap-1">
                            <Dot delay={0} />
                            <Dot delay={150} />
                            <Dot delay={300} />
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 border-t border-brand-100 bg-white p-4">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-brand-100 px-3 py-1.5 text-xs text-brand-900/80 transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="border-t border-brand-100 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2 px-3 pb-2 pt-3"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Ask ${ASSISTANT_NAME}...`}
                  disabled={isStreaming}
                  className="flex-1 rounded-full border border-brand-100 px-4 py-2.5 text-sm outline-none focus:border-brand-400 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-800 disabled:opacity-40"
                  aria-label="Send"
                >
                  <PaperPlaneTilt className="h-4 w-4" weight="fill" />
                </button>
              </form>
              <p className="px-4 pb-2 text-center text-[10px] text-brand-900/45">
                AI-generated responses. Verify important details with our team.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="inline-block h-2 w-2 rounded-full bg-brand-300"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, delay: delay / 1000 }}
    />
  );
}

function SpireMark() {
  // A stylized obelisk silhouette (Spire = NYC reference for Ventura's Manhattan HQ)
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 2 L14 7 L14 20 L10 20 L10 7 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="6" y1="20" x2="18" y2="20" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
