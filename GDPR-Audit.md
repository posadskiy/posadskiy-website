## GDPR Compliance Audit

### Personal data collected
- **Contact form** (`src/pages/ContactPage.tsx`):
  - `name`, `email`, `message` collected via inputs.
  - Client-side validation enforces minimum lengths before submission.
  - All data is sent via `fetch` to `https://api.web3forms.com/submit`, so the controller is Web3Forms.
  - Access key originates from `VITE_WEB3FORMS_ACCESS_KEY` (or fallback constant).

### Downstream processors
- **Web3Forms** handles the submitted contact data. The service operates outside the EU, so we rely on their published Standard Contractual Clauses/SCCs (per their documentation) and any available data protection statement.
- No analytics (e.g., Google Analytics, Facebook Pixel) or marketing pixels are present in the current codebase.
- No server-side persistence occurs inside this repo beyond the outbound POST; personal data stays with Web3Forms and the sender.

### Cookies
- Only essential cookies/local storage entries exist (e.g., `localStorage` does not store personal data right now).
- No third-party tracking cookies or persistent identifiers beyond what Web3Forms requires are created.

### Compliance implications
- Need a consent banner that explains cookies/non-essential processing, even if we only rely on strictly necessary cookies.
- Must document the data processing (collection, retention, legal basis, transfers) in a privacy policy and expose contact info for data subjects plus the Slovenian data protection authority.
- Ensure users can opt out of any optional processing and see the policy/cookie choices on every page.

