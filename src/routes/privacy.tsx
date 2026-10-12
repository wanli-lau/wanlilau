import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/privacy')({
  head: () => ({ meta: [
    { title: 'Privacy Policy | Wanli Consultancy LLC' },
    { name: 'description', content: 'Learn how information is handled when you visit the Wanli Consultancy LLC website or contact us about lifestyle coaching.' },
    { property: 'og:title', content: 'Privacy Policy | Wanli Consultancy LLC' },
    { property: 'og:description', content: 'Information about privacy when visiting our website or contacting our practice.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <main className="legal-page site-width">
    <Link to="/" className="legal-back"><ArrowLeft size={15} /> Back to home</Link>
    <div className="section-label">Wanli Consultancy LLC</div>
    <h1>Privacy Policy</h1>
    <p>This policy describes information handling when you visit the Wanli Consultancy LLC website or contact us about our services.</p>
    <h2>Information you provide</h2>
    <p>This website does not have accounts, contact forms, or online payments. If you contact us by phone or email, you may provide your name, contact details, and information about your inquiry. Please avoid sending sensitive personal or health information by email.</p>
    <h2>How information is used</h2>
    <p>Information provided in an inquiry is used to respond to you, discuss coaching services, and coordinate appointments. Any additional information handling for coaching services should be discussed before services begin.</p>
    <h2>Website services</h2>
    <p>The website’s hosting and font providers may process technical information such as your IP address, browser information, and request logs to deliver the website. Clicking a phone or email link opens the application you use for that service, which is governed by its own privacy practices.</p>
    <h2>Keeping information secure</h2>
    <p>No website or email service can guarantee complete security. Please contact us directly with any questions about how your information is handled or to request access to, correction of, or deletion of information you have provided, subject to applicable requirements.</p>
    <h2>Policy updates</h2>
    <p>This policy may be updated as our website or practices change. The current version will be available on this page.</p>
    <h2>Contact</h2>
    <p>For privacy questions, contact Wanli Consultancy LLC at <a href="mailto:wanlilau1234@gmail.com">wanlilau1234@gmail.com</a> or <a href="tel:+12063938345">206-393-8345</a>.</p>
    <p>752 Summerhill Ridge Dr NW, Issaquah, WA.</p>
  </main>;
}