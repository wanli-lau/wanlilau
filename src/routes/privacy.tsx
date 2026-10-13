import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/privacy')({
  head: () => ({ meta: [
    { title: 'Privacy Policy | Wanli Consultancy LLC' },
    { name: 'description', content: 'Privacy policy for Wanli Consultancy LLC, effective 10/12/2026.' },
    { property: 'og:title', content: 'Privacy Policy | Wanli Consultancy LLC' },
    { property: 'og:description', content: 'Privacy policy for Wanli Consultancy LLC.' },
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
    <p>Wanli Consultancy LLC Privacy Policy</p>
    <p>Effective date: 10/12/2026</p>
    <p>Who we are. Wanli Consultancy LLC ("we", "us") provides lifestyle coaching. This policy explains what personal information we collect, how we use it and the choices you have.</p>
    <p>Information we collect. We collect your name, email address and mobile phone number when you book an appointment. We also keep your appointment date and time, your reply messages (such as Y, HELP and STOP) and a record of when and how you agreed to receive texts. Our website may also collect basic technical data such as your browser type and IP address.</p>
    <p>How we use it. We use your information to book and manage your appointments, to send the appointment reminders and confirmations you asked for, to answer your questions and to keep records required by law and by mobile carriers.</p>
    <p>Text messaging. If you opt in, we send appointment reminders and booking confirmations to your mobile number. Message frequency varies, and message and data rates may apply. Reply STOP to opt out or HELP for help.</p>
    <p>No sharing of mobile information for marketing. We do not sell, rent or share your mobile phone number or text messaging opt-in data and consent with third parties or affiliates for their marketing or promotional purposes. Text messaging opt-in information is never shared with third parties for those purposes.</p>
    <p>Who else sees your information. We use service providers to run our business, such as our text-messaging provider, our email provider and our website hosting provider. They may process your information only to provide services to us and may not use it for other purposes. We may also disclose information if the law requires it or to protect our rights and safety.</p>
    <p>How long we keep it. We keep appointment and consent records for as long as we need them to provide our service and meet legal obligations, then delete or anonymize them. Contact us if you want your information deleted sooner.</p>
    <p>Security. We use reasonable technical and organizational measures to protect your information. No method of storage or transmission is completely secure.</p>
    <p>Your choices. You can opt out of texts at any time by replying STOP. You can ask us to see, correct or delete your personal information by contacting us at wanlilau1234@gmail.com. We will respond within a reasonable time.</p>
    <p>Children. Our service is not directed to children under 13, and we do not knowingly collect their information.</p>
    <p>Changes. We may update this policy. We will post the new version on this page with a new effective date.</p>
    <p>Contact. Wanli Consultancy LLC, wanlilau1234@gmail.com, 206-393-8345</p>
  </main>;
}
