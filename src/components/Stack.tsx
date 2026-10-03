import { stack } from "../data";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="stack section-pad">
      <div className="section-heading">
        <div>
          <span className="eyebrow">/ MY TOOLKIT</span>
          <h2>
            The stack<span>.</span>
          </h2>
        </div>
        <p>
          The tools are just tools.
          <br />
          The thinking is the valuable part.
        </p>
      </div>
      <div className="stack-groups">
        {stack.map(([category, items]) => (
          <div className="stack-group" key={category}>
            <span className="category-label">
              {category.toUpperCase()} / {items.length}
            </span>
            <div className="stack-items">
              {items.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="stack-item">
                    <span className={`stack-icon icon-${index}`} />
                    <b>{item}</b>
                    <small>0{index + 1}</small>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
