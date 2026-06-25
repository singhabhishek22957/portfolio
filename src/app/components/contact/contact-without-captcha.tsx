"use client";

import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "@/../utils/check-email";
import { User, Mail, MessageSquare } from "lucide-react";

const ContactWithoutCaptcha = () => {
const [input, setInput] = useState({
name: "",
email: "",
message: "",
});

const [error, setError] = useState({
email: false,
required: false,
});

const [isLoading, setIsLoading] = useState(false);

const checkRequired = () => {
if (input.email && input.message && input.name) {
setError((prev) => ({
...prev,
required: false,
}));
}
};

const handleSendMail = async (
e: React.MouseEvent<HTMLButtonElement>,
) => {
e.preventDefault();


if (!input.name || !input.email || !input.message) {
  setError((prev) => ({
    ...prev,
    required: true,
  }));
  return;
}

if (!isValidEmail(input.email)) {
  setError((prev) => ({
    ...prev,
    email: true,
  }));
  return;
}

try {
  setIsLoading(true);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      message: input.message,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to send message");
  }

  toast.success("Message sent successfully!");

  setInput({
    name: "",
    email: "",
    message: "",
  });

  setError({
    email: false,
    required: false,
  });
} catch (error: unknown) {
  if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error("Something went wrong.");
  }
} finally {
  setIsLoading(false);
}


};

return ( <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl"> <div className="flex flex-col gap-8"> <div className="flex flex-col gap-2"> <h3 className="text-2xl font-bold text-white tracking-tight">
Let's Work Together </h3>


      <p className="text-slate-400 text-sm">
        Available for full-time roles, freelance work, and collaboration
        opportunities.
      </p>
    </div>

    <div className="flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col gap-2 group/input">
        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
          <User className="w-4 h-4" />
          Your Name
        </label>

        <input
          type="text"
          value={input.name}
          maxLength={100}
          placeholder="Enter your name"
          onChange={(e) =>
            setInput({
              ...input,
              name: e.target.value,
            })
          }
          onBlur={checkRequired}
          className="bg-white/5 w-full border border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-white/10 outline-none transition-all duration-300 px-5 py-4 text-white placeholder:text-slate-600"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2 group/input">
        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Your Email
        </label>

        <input
          type="email"
          value={input.email}
          maxLength={100}
          placeholder="Enter your email address"
          onChange={(e) =>
            setInput({
              ...input,
              email: e.target.value,
            })
          }
          onBlur={() => {
            checkRequired();

            setError((prev) => ({
              ...prev,
              email: !isValidEmail(input.email),
            }));
          }}
          className={`bg-white/5 w-full border rounded-2xl focus:bg-white/10 outline-none transition-all duration-300 px-5 py-4 text-white placeholder:text-slate-600 ${
            error.email
              ? "border-red-500/50"
              : "border-white/10 focus:border-red-500/50"
          }`}
        />

        {error.email && (
          <p className="text-xs text-red-500 ml-1">
            Please provide a valid email address.
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 group/input">
        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Your Message
        </label>

        <textarea
          rows={5}
          maxLength={500}
          value={input.message}
          placeholder="Tell me about your project, internship, or job opportunity..."
          onChange={(e) =>
            setInput({
              ...input,
              message: e.target.value,
            })
          }
          onBlur={checkRequired}
          className="bg-white/5 w-full border border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-white/10 outline-none transition-all duration-300 px-5 py-4 text-white placeholder:text-slate-600 resize-none"
        />
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {error.required && (
          <p className="text-sm text-red-500 text-center font-medium">
            Oops! Looks like some fields are still empty.
          </p>
        )}

        <button
          onClick={handleSendMail}
          disabled={isLoading}
          className="relative group/btn overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-900 p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          <div className="relative flex items-center justify-center gap-2 bg-[#050505] group-hover/btn:bg-transparent transition-all rounded-[15px] px-8 py-4 text-white font-bold uppercase tracking-widest text-sm">
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                Send Inquiry
                <TbMailForward className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  </div>

  <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-20 rounded-full" />
</div>


);
};

export default ContactWithoutCaptcha;
