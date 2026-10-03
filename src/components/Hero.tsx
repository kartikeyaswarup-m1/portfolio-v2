import { ArrowDownRight } from "lucide-react";
import { motion } from "motion/react";
import { reveal } from "./revealConfig";

export function Hero() {
  return (
    <section className="hero section-grid">
      <div className="hero-copy">
        <motion.div {...reveal} className="availability">
          <span className="status-dot" /> AI & FULL-STACK DEVELOPER · 2026{" "}
          <b>|</b>
        </motion.div>
        <motion.h1 {...reveal} transition={{ duration: 0.6, delay: 0.1 }}>
          Building systems
          <br />
          <span>that solves problems.</span>
          <i>|</i>
        </motion.h1>
        <motion.p {...reveal} transition={{ duration: 0.6, delay: 0.2 }}>
          AI and full-stack developer building RAG systems, document
          intelligence tools, and reliable web applications with Python,
          FastAPI, React, and modern vector search.
        </motion.p>
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-actions"
        >
          <a className="button-primary" href="#projects">
            View projects <ArrowDownRight size={15} />
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-ghost"
          >
            Download CV
          </a>
        </motion.div>
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-tags"
        >
          {["RAG", "LLMs", "Python", "FastAPI", "React", "Qdrant"].map(
            (tag) => (
              <span key={tag}>{tag}</span>
            ),
          )}
        </motion.div>
      </div>
      <motion.div
        className="terminal-wrap"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="terminal">
          <div className="terminal-head">
            <div>
              <span />
              <span />
              <span />
            </div>
            <small>kartikeya.tsx</small>
            <b>⌘ K</b>
          </div>
          <pre>
            <code>
              <em>// turning documents into decisions</em>
              {"\n"}
              <strong>const</strong> kartikeya = {"{"}
              {"\n"} role: <mark>"Full-Stack Dev"</mark>,{"\n"} stack: [
              <mark>"RAG"</mark>, <mark>"FastAPI"</mark>, <mark>"React"</mark>],
              {"\n"} open: <strong>true</strong>
              {"\n"}
              {"}"}
            </code>
          </pre>
          <div className="terminal-foot">
            <span>
              <i /> system online
            </span>
            <span>utf-8 · 2.4kb</span>
          </div>
        </div>
        <div className="terminal-note">
          / currently shipping from <b>Dehradun, India</b>
        </div>
      </motion.div>
    </section>
  );
}
