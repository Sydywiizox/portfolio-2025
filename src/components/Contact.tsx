import AnimatedInput from "@/components/smoothui/ui/AnimatedInput";
import AnimatedTextarea from "@/components/smoothui/ui/AnimatedTextarea";
import { useTranslation } from "@/hooks/useTranslation";
import emailjs from "emailjs-com";
import { AtSign, Mail, MessageSquare, Send, User } from "lucide-react";
import { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
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
          <style>{`
            :root {
              --color-brand: #2563eb;
            }
            .bg-background {
              background-color: rgb(255 255 255);
            }
            .dark .bg-background {
              background-color: rgb(24 24 27);
            }
            .text-foreground {
              color: rgb(24 24 27);
            }
            .dark .text-foreground {
              color: rgb(250 250 250);
            }
            .focus\\:ring-primary:focus {
              --tw-ring-color: #2563eb;
            }
          `}</style>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            {/* Nom */}
            <input type="hidden" name="name" value={formData.name} />
            <AnimatedInput
              value={formData.name}
              onChange={(val) => setFormData({ ...formData, name: val })}
              label={t.contact.form.name}
              placeholder={t.contact.form.namePlaceholder}
              icon={<User className="size-4 text-blue-600" />}
              inputClassName="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 rounded-lg py-3"
            />

            {/* Email */}
            <input type="hidden" name="email" value={formData.email} />
            <AnimatedInput
              type="email"
              value={formData.email}
              onChange={(val) => setFormData({ ...formData, email: val })}
              label={`${t.contact.form.email} *`}
              placeholder={t.contact.form.emailPlaceholder}
              required={true}
              icon={<AtSign className="size-4 text-blue-600" />}
              inputClassName="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 rounded-lg py-3"
            />

            {/* Sujet */}
            <input type="hidden" name="subject" value={formData.subject} />
            <AnimatedInput
              value={formData.subject}
              onChange={(val) => setFormData({ ...formData, subject: val })}
              label={t.contact.form.subject}
              placeholder={t.contact.form.subjectPlaceholder}
              icon={<MessageSquare className="size-4 text-blue-600" />}
              inputClassName="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 rounded-lg py-3"
            />

            {/* Message */}
            <input type="hidden" name="message" value={formData.message} />
            <AnimatedTextarea
              value={formData.message}
              onChange={(val) => setFormData({ ...formData, message: val })}
              label={`${t.contact.form.message} *`}
              placeholder={t.contact.form.messagePlaceholder}
              icon={<Mail className="size-4 text-blue-600" />}
              rows={6}
              required={true}
              textareaClassName="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 rounded-lg py-3"
            />

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              * {t.contact.form.requiredMessage}
            </p>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg uppercase"
            >
              <Send className="size-5" />
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
}
