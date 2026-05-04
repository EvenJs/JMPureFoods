import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

import data from "@/data/siteData.json";

type FormData = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { contact } = data.pages;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (formData: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone ?? "",
          message: formData.message,
          subject: "New enquiry from JM Purefoods website",
        }),
      });

      const result = await res.json();
      setStatus(result.success ? "success" : "error");
      if (result.success) reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl
    border border-gray-200
    bg-off-white
    text-sm text-text-dark
    placeholder:text-gray-400
    focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand
    transition-colors duration-200
  `;

  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            className="text-xs font-semibold text-text-muted uppercase
            tracking-wider mb-1.5 block"
          >
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label
            className="text-xs font-semibold text-text-muted uppercase
            tracking-wider mb-1.5 block"
          >
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label
          className="text-xs font-semibold text-text-muted uppercase
          tracking-wider mb-1.5 block"
        >
          Phone{" "}
          <span className="text-gray-400 font-normal normal-case">
            (optional)
          </span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+61 ..."
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label
          className="text-xs font-semibold text-text-muted uppercase
          tracking-wider mb-1.5 block"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("message")}
          placeholder="Tell us about your requirements..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          w-full py-3.5 rounded-xl
          bg-gold hover:bg-gold-light
          text-white text-sm font-semibold uppercase tracking-widest
          transition-colors duration-200
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {status === "loading" ? "Sending..." : contact.form.submitLabel}
      </motion.button>

      {/* Success message */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            flex items-center gap-3 p-4 rounded-xl
            bg-green-50 border border-green-200
            text-green-700 text-sm
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {contact.form.successMessage}
        </motion.div>
      )}

      {/* Error message */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            flex items-center gap-3 p-4 rounded-xl
            bg-red-50 border border-red-200
            text-red-700 text-sm
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {contact.form.errorMessage}
        </motion.div>
      )}
    </form>
  );
}
