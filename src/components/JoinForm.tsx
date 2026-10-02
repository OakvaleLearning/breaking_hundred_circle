"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/site";
import { EASE } from "./motion";

/**
 * Mirrors the original mailto hand-off: no backend, the browser opens a
 * pre-filled email to the Circle's inbox.
 */
export function JoinForm({ price = "£299" }: { price?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = "Breaking Hundred Circle membership request";
    const body = [
      "Hello Breaking Hundred team,",
      "",
      `I would like to join the Membership Circle at ${price} per year. Please send me the joining and payment details.`,
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organisation (optional): ${data.get("organisation") || "—"}`,
      "",
      "Thank you.",
    ].join("\n");

    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field = (
    name: string,
    label: string,
    type = "text",
    required = true,
    wide = false,
  ) => (
    <motion.div
      className={wide ? "wide" : undefined}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      <label htmlFor={name}>
        {label}
        <input id={name} name={name} type={type} required={required} autoComplete={type === "email" ? "email" : "off"} />
      </label>
    </motion.div>
  );

  return (
    <motion.form
      className="join-form"
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {field("name", "Your name")}
      {field("email", "Email address", "email")}
      {field("organisation", "Organisation (optional)", "text", false, true)}

      <motion.div
        className="wide"
        variants={{
          hidden: { opacity: 0, y: 18 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
        }}
      >
        <button className="button" type="submit">
          <span>Request joining details</span>
          <span className="arrow" aria-hidden>↗</span>
        </button>
        <p className="notice" aria-live="polite">
          {sent
            ? "Your email client should now be open with the message ready to send."
            : `This opens an email to ${site.email} with your details filled in. Nothing is submitted to a server.`}
        </p>
      </motion.div>
    </motion.form>
  );
}
