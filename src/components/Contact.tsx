import { useTranslation } from "@/hooks/useTranslation";
import emailjs from "emailjs-com";
import { Mail } from "lucide-react";
import { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      toast.promise(
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY),
        {
          loading: t.contact.toast.loading,
          success: t.contact.toast.success,
          error: t.contact.toast.error,
        }
      );
      form.current.reset();
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-10 w-full bg-zinc-100 dark:bg-zinc-800 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="flex flex-col gap-5 text-center mb-16">
          <h2>{t.contact.h3}</h2>
          <hr className="w-8 mx-auto h-1 rounded-2xl border-0 bg-zinc-800 dark:bg-zinc-400" />
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">
            {t.contact.p}
          </p>
        </div>

        {/* Formulaire */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Nom */}
            <div>
              <label
                className="block text-zinc-800 dark:text-zinc-200 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                {t.contact.form.name}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-zinc-900 dark:text-zinc-100"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-zinc-800 dark:text-zinc-200 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                {t.contact.form.email} *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-zinc-900 dark:text-zinc-100"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>

            {/* Sujet */}
            <div>
              <label
                className="block text-zinc-800 dark:text-zinc-200 text-sm font-semibold mb-2"
                htmlFor="subject"
              >
                {t.contact.form.subject}
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-zinc-900 dark:text-zinc-100"
                placeholder={t.contact.form.subjectPlaceholder}
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-zinc-800 dark:text-zinc-200 text-sm font-semibold mb-2"
                htmlFor="message"
              >
                {t.contact.form.message} *
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none text-zinc-900 dark:text-zinc-100"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              * {t.contact.form.requiredMessage}
            </p>
            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg uppercase"
            >
              <Mail className="size-5" />
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
}
