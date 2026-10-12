import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/terms')({
  head: () => ({ meta: [
    { title: 'Terms and Conditions | Wanli Consultancy LLC' },
    { name: 'description', content: 'Terms for using the Wanli Consultancy LLC website and contacting our Seattle lifestyle coaching practice.' },
    { property: 'og:title', content: 'Terms and Conditions | Wanli Consultancy LLC' },
    { property: 'og:description', content: 'Website terms and information about lifestyle coaching.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Terms,
});

function Terms() {
  return <main className="legal-page site-width">
    <Link to="/" className="legal-back"><ArrowLeft size={15} /> Back to home</Link>
    <div className="section-label">Wanli Consultancy LLC</div>
    <h1>Terms and Conditions</h1>
    <p>These terms apply to your use of the Wanli Consultancy LLC website. By using this website, you agree to these terms.</p>
    <h2>Website information</h2>
    <p>This website provides general information about our lifestyle coaching services and ways to contact us. We aim to keep information accurate, but details may change.</p>
    <h2>Lifestyle coaching</h2>
    <p>Lifestyle coaching supports personal reflection, goals, and everyday habits. It is not a substitute for medical care, mental health treatment, or legal or financial advice. No particular outcome is guaranteed.</p>
    <h2>Booking and service arrangements</h2>
    <p>Contacting us does not by itself confirm a booking or establish a coaching relationship. Session arrangements and any applicable service terms will be discussed and agreed directly before services begin.</p>
    <h2>Use of this website</h2>
    <p>Please use this website lawfully and do not attempt to interfere with its operation. Website content is provided for general information, not as advice tailored to your circumstances.</p>
    <h2>Updates</h2>
    <p>These terms may be updated. The version displayed on this page applies to your use of the website.</p>
    <h2>Contact</h2>
    <p>For questions about these terms, contact Wanli Consultancy LLC at <a href="mailto:wanli26@gmail.com">wanli26@gmail.com</a> or <a href="tel:+12063938345">206-393-8345</a>.</p>
    <p>752 Summerhill Ridge Dr NW, Issaquah, WA.</p>
  </main>;
}