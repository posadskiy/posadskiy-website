import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { SOCIAL_LINKS } from '@/constants/links';
import { ContactFormData, AlertState } from '@/types';

interface ContactPageProps {
  setLoading: (loading: boolean) => void;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ac01c9ec-65b2-492d-aad5-45939470ba8f';

const socialIcons = [
  {
    name: 'Telegram',
    url: SOCIAL_LINKS.Telegram,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.Linkedin,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Messenger',
    url: SOCIAL_LINKS.Messenger,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: SOCIAL_LINKS.Instagram,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export const ContactPage = ({ setLoading }: ContactPageProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [alert, setAlert] = useState<AlertState>({
    open: false,
    header: '',
    description: '',
    confirmText: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.message.length < 30) {
      setAlert({
        open: true,
        header: 'Message too short',
        description: 'Please write something more detailed (at least 30 characters)',
        confirmText: 'OK',
      });
      return;
    }

    if (!formData.name || formData.name.length < 2) {
      setAlert({
        open: true,
        header: 'Name required',
        description: 'Please fill in your name',
        confirmText: 'OK',
      });
      return;
    }

    if (!formData.email || formData.email.length < 5) {
      setAlert({
        open: true,
        header: 'Email required',
        description: 'Please fill in your email',
        confirmText: 'OK',
      });
      return;
    }

    setLoading(true);

    try {
      const submission = new FormData();
      submission.append('access_key', WEB3FORMS_ACCESS_KEY);
      submission.append('subject', `New message from ${formData.name}`);
      submission.append('from_name', formData.name);
      submission.append('email', formData.email);
      submission.append('message', formData.message);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: submission,
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Web3Forms submission failed');
      }

      setFormData({ name: '', email: '', message: '' });
      setAlert({
        open: true,
        header: 'Success!',
        description: 'Your message has been sent successfully',
        confirmText: 'OK',
      });
    } catch (error) {
      setLoading(false);
      setAlert({
        open: true,
        header: 'Something went wrong',
        description: error instanceof Error ? error.message : 'Please try again later',
        confirmText: 'OK',
      });
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Let's discuss your project or just say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Connect with me</h2>
              <p className="text-slate-400 mb-8">
                You can reach me through any of these platforms
              </p>

              <div className="space-y-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="text-violet-400 group-hover:text-violet-300 transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-white font-medium group-hover:text-violet-300 transition-colors">
                      {social.name}
                    </span>
                    <svg
                      className="w-4 h-4 ml-auto text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>

              <Input
                label="Name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Alert Modal */}
      {alert.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setAlert({ ...alert, open: false })}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-effect rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{alert.header}</h3>
            <p className="text-slate-300 mb-6">{alert.description}</p>
            <Button onClick={() => setAlert({ ...alert, open: false })} className="w-full">
              {alert.confirmText}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

