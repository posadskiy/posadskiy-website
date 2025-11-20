import { Link } from 'react-router-dom';
import { PAGES } from '@/constants/pages';

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 pb-16 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white sm:text-5xl">Privacy policy</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          This privacy policy explains how personal data is collected and processed on this site in accordance with
          the General Data Protection Regulation (GDPR), EU law, and the Slovenian Information Commissioner
          requirements.
        </p>

        <section className="mt-12 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Data controller</h2>
          <p className="text-slate-300">
            The data controller is the site owner. You can exercise your rights or ask questions by submitting a
            request through the{' '}
            <Link to={PAGES.CONTACT.url || '/contact'} className="text-violet-300 underline">
              contact form
            </Link>
            .
          </p>
        </section>

        <section className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Personal data collected</h2>
          <p className="text-slate-300">
            The only personal data collected is what you voluntarily share via the contact form: your name, email
            address, and message. These fields are sent directly to Web3Forms (`https://api.web3forms.com/submit`)
            and are not stored locally in this application.
          </p>
          <p className="text-slate-300">
            Submission responses are used only to reply to you and to keep a short-lived record of the conversation
            (no more than 30 days unless otherwise requested).
          </p>
        </section>

        <section className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Legal basis and retention</h2>
          <p className="text-slate-300">
            Processing is necessary to respond to your inquiry (legitimate interest) and for the performance of a
            potential contract when we engage in a professional conversation. Web3Forms acts as a processor under
            the data controller’s instructions. Data is retained only as long as needed to address your request,
            typically up to 30 days, unless you ask for earlier deletion.
          </p>
        </section>

        <section className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Cookies and trackers</h2>
          <p className="text-slate-300">
            This site only sets essential cookies (or equivalent storage) for navigation and the cookie consent banner.
            There are no analytics or advertising trackers embedded by default. Optional cookies can be rejected via
            the consent banner.
          </p>
        </section>

        <section className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Third-party transfers</h2>
          <p className="text-slate-300">
            Web3Forms processes the submitted data and may transfer it outside the European Economic Area. Any such
            transfer relies on published Standard Contractual Clauses or other appropriate safeguards. Please refer
            to Web3Forms’ documentation for their full data protection commitments.
          </p>
        </section>

        <section className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Your rights</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Right of access – request confirmation about personal data processing.</li>
            <li>Right to rectification – correct inaccurate data containing your name, email, or message.</li>
            <li>Right to erasure – ask for removal beyond the retention window.</li>
            <li>Right to object – refuse any optional processing you have consented to.</li>
            <li>Right to restriction and data portability – request a copy for personal use.</li>
            <li>Right to lodge a complaint with the Slovenian Information Commissioner (Informacijski pooblaščenec, <a className="text-violet-300 underline" href="https://www.ip-rs.si/">https://www.ip-rs.si</a>).</li>
          </ul>
          <p className="text-slate-300">
            Send requests through the contact form or via any published email address you already have on file.
          </p>
        </section>

        <section className="mt-8 space-y-4 rounded-2xl border border-white/10 p-6 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Information security</h2>
          <p className="text-slate-300">
            Appropriate organizational and technical measures protect your data during transmission and storage.
            Only authorized personnel (the site operator and Web3Forms staff) can access the form submissions.
          </p>
          <p className="text-slate-300">
            In case of a data breach, the site owner will comply with GDPR notification obligations and inform
            affected individuals without undue delay.
          </p>
        </section>
      </div>
    </div>
  );
};

