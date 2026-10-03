export function About() {
  return (
    <section id="about" className="about section-pad section-grid">
      <div>
        <span className="eyebrow">/ A LITTLE CONTEXT</span>
        <h2>
          About me<span>.</span>
        </h2>
        <div className="about-copy">
          <p>
            I’m Kartikeya, an AI and full-stack developer who enjoys turning
            difficult information into software people can actually use. My
            work sits at the intersection of intelligent search, clean APIs,
            and thoughtful product experiences.
          </p>
          <p>
            At EY, I built a vendor security and compliance analysis platform
            that read complex documents, found the right evidence, and turned
            it into clear risk signals. It combined RAG, Gemini, Qdrant,
            PyMuPDF, and FastAPI across a complete analysis workflow.
          </p>
          <p>
            I like working across the full path from idea to implementation:
            shaping retrieval pipelines, designing dependable APIs, building
            interfaces, and making sure the final system feels clear and useful.
          </p>
        </div>
        <div className="stat-chips">
          <span>
            EY <small>AI & DATA INTERN</small>
          </span>
          <span>
            02 <small>FEATURED PROJECTS</small>
          </span>
          <span>
            150+ <small>LEETCODE</small>
          </span>
          <span>
            7.17 <small>B.TECH CGPA</small>
          </span>
        </div>
      </div>
      <div className="portrait">
        <a
          className="cv-preview-link"
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="View Kartikeya Swarup Sharma's CV"
        >
          <iframe
            className="cv-document"
            src="/cv.pdf#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0"
            title="Preview of Kartikeya Swarup Sharma's CV"
            tabIndex={-1}
          />
          <span className="cv-preview-gradient" />
          <span className="cv-preview-label">cv.pdf ↗</span>
        </a>
      </div>
    </section>
  );
}
