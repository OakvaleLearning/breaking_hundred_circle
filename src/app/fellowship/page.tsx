import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { Closing } from "@/components/Closing";
import { Method } from "@/components/Method";
import { Photo } from "@/components/Photo";
import { scaleIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Fellowship",
  description:
    "The Fellowship: a selective 12-month leadership journey with learning, connection and a real-world capstone. Cohort 3 returns in 2028.",
};

const steps = [
  {
    title: "Apply",
    body: "A short written application and a conversation with the programme team. We are looking for ambition and generosity, not a perfect CV.",
  },
  {
    title: "Journey",
    body: "Twelve months of learning labs, coaching and peer accountability, structured around the five stages of the Circle method.",
  },
  {
    title: "Capstone",
    body: "A real-world project in your own organisation or community, presented to the cohort and our network at the closing showcase.",
  },
];

const included = [
  {
    tag: "LEARNING LABS",
    title: "Monthly deep dives",
    body: "Full-day labs on strategic influence, commercial fluency, board readiness and leading through resistance.",
  },
  {
    tag: "COACHING",
    title: "One-to-one coaching",
    body: "Six confidential sessions with an accredited executive coach matched to your goals.",
  },
  {
    tag: "COHORT",
    title: "A cohort for life",
    body: "A small group who move through the year together and stay connected long after it ends.",
  },
  {
    tag: "CAPSTONE",
    title: "Real-world capstone",
    body: "Applied work with structured support, so the programme produces evidence of impact, not just certificates.",
  },
];

const faqs = [
  {
    q: "When does the next cohort start?",
    a: "Cohort 3 returns in 2028. Applications open the year before — join the Membership Circle or email us to be told first.",
  },
  {
    q: "How is the Fellowship different from membership?",
    a: "The Fellowship is selective, time-bound and intensive: a fixed cohort, one-to-one coaching and a capstone project. Membership is open all year and flexible around your schedule.",
  },
  {
    q: "What is the time commitment?",
    a: "Expect one full learning-lab day a month, a coaching session every other month, and time for your capstone project across the second half of the year.",
  },
  {
    q: "Can I do both?",
    a: "Yes. Many Fellows are members first, and most stay in the Membership Circle after the programme ends.",
  },
  {
    q: "Is funding available?",
    a: "Some places are supported by partner organisations. Tell us about your circumstances when you apply and we will be straight with you about what is possible.",
  },
];

export default function FellowshipPage() {
  return (
    <>
      <PageHero
        eyebrow="The deep dive"
        heading="The Fellowship"
        intro="A focused, 12-month leadership journey with learning, connection and a real-world capstone. Cohort 3 returns in 2028."
        ghost="12"
        tags={["12 months", "Selective cohort", "Cohort 3 · 2028"]}
        cta={{ label: "Register your interest", href: "#interest" }}
        stats={[
          { value: "12", label: "Months, start to showcase", to: 12 },
          { value: "6", label: "One-to-one coaching sessions", to: 6 },
          { value: "2028", label: "Cohort 3 begins" },
        ]}
      />

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <Reveal as="span" className="eyebrow">How it runs</Reveal>
            <AnimatedHeading text="Three movements across one year." />
            <Reveal as="p" delay={0.12}>
              The Fellowship is deliberately long. Leadership growth that lasts needs time to be
              tested in the real work.
            </Reveal>
          </div>
          <RevealGroup className="steps" step={0.12}>
            {steps.map((step, i) => (
              <RevealItem as="article" key={step.title}>
                <span className="step-num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p className="muted" style={{ marginTop: 12 }}>{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="section-heading">
            <Reveal as="span" className="eyebrow">The method</Reveal>
            <AnimatedHeading text="Five stages, one year, measurable change." />
            <Reveal as="p" delay={0.12}>
              Every lab, coaching session and capstone milestone maps to a stage of the Circle
              method.
            </Reveal>
          </div>
          <Method />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-heading">
            <Reveal as="span" className="eyebrow">What is included</Reveal>
            <AnimatedHeading text="Everything a Fellow gets." />
          </div>
          <RevealGroup className="included" step={0.09}>
            {included.map((item) => (
              <RevealItem as="article" key={item.title}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal variants={scaleIn}>
            <Photo
              src="/images/fellowship-learning-lab.jpg"
              alt="Fellows working through a problem at a learning lab"
              sizes="(max-width: 700px) 100vw, 564px"
              style={{ minHeight: 460 }}
            />
          </Reveal>
          <div>
            <Reveal as="span" className="eyebrow" style={{ color: "var(--wine)" }}>
              Cohort 3
            </Reveal>
            <AnimatedHeading text="Applications open the year before." />
            <Reveal as="p" delay={0.1}>
              Cohort 3 begins in 2028. Places are limited and the application process is a
              conversation rather than a filter — we want to understand where you are heading.
            </Reveal>
            <Reveal as="p" delay={0.18} id="interest">
              Members of the Membership Circle hear about applications first, and can use the
              year in between to prepare.
            </Reveal>
            <Reveal delay={0.26} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
              <a className="button" href="mailto:admin@breakinghundred.org?subject=Fellowship%20Cohort%203%20interest">
                <span>Register your interest</span>
                <span className="arrow" aria-hidden>↗</span>
              </a>
              <Link className="button outline" href="/membership" style={{ color: "var(--ink)" }}>
                <span>Join the Circle meanwhile</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-heading">
            <Reveal as="span" className="eyebrow">Questions</Reveal>
            <AnimatedHeading text="About the Fellowship." />
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <Closing
        eyebrow="Cohort 3 · 2028"
        heading="Twelve months that change what you believe is possible."
        ctaLabel="Register your interest"
        ctaHref="mailto:admin@breakinghundred.org?subject=Fellowship%20Cohort%203%20interest"
      />
    </>
  );
}
