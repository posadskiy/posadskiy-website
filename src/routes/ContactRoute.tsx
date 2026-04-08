import { useOutletContext } from 'react-router-dom';
import { ContactPage } from '@/pages/ContactPage';
import type { AppOutletContext } from '@/types/outlet';

export function ContactRoute() {
  const { setLoading } = useOutletContext<AppOutletContext>();
  return <ContactPage setLoading={setLoading} />;
}
