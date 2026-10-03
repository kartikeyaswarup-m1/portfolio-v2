import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="contact section-pad">
      <div className="contact-glow" />
      <span className="eyebrow">/ HAVE A GOOD ONE?</span>
      <h2>
        Let’s build
        <br />
        <span>something.</span>
      </h2>
      <p>Open to AI, backend, and full-stack engineering opportunities.</p>
      <div className="contact-actions">
        <a className="button-primary" href="mailto:swarupkartikeya@gmail.com">
          Email me <Mail size={15} />
        </a>
      </div>
      <div className="contact-links" aria-label="Social links">
        <a href="https://github.com/kartikeyaswarup-m1" target="_blank" rel="noreferrer">
          <GitBranch size={15} />
          <span>GitHub</span>
          <ArrowUpRight size={13} />
        </a>
        <a href="https://www.linkedin.com/in/kartikeya-swarup-sharma" target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={15} />
          <span>LinkedIn</span>
          <ArrowUpRight size={13} />
        </a>
        <a href="https://x.com/swarupkartikey" target="_blank" rel="noreferrer">
          <MessageCircle size={15} />
          <span>X</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
      <small>Dehradun, Uttarakhand, India · +91 98706 93221</small>
    </section>
  );
}
