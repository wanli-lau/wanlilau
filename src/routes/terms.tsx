import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/terms')({
  head: () => ({ meta: [
    { title: 'Terms and Conditions | Wanli Consultancy LLC' },
    { name: 'description', content: 'Text message terms and conditions for Wanli Consultancy LLC, effective 10/12/2026.' },
    { property: 'og:title', content: 'Terms and Conditions | Wanli Consultancy LLC' },
    { property: 'og:description', content: 'Text message terms and conditions for Wanli Consultancy LLC.' },
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
    <p>Wanli Consultancy LLC Text Message Terms and Conditions</p>
    <p>Effective date: 10/12/2026</p>
    <p>Program description. Wanli Consultancy LLC ("we", "us") offers a text message program that sends appointment reminders and booking confirmations to customers who sign up. We do not send promotional or marketing messages through this program.</p>
    <p>How to join. You can join by texting REMIND to 888-559-2816. We will reply with a welcome message and ask you to reply Y to confirm. You are signed up only after you reply Y. You may also be asked to agree to text reminders when you book an appointment on https://joyful-sessions-site.lovable.app</p>
    <p>Message frequency. Message frequency varies. You will typically receive one reminder before each appointment you book, plus any confirmation or cancellation messages related to that appointment.</p>
    <p>Costs. Message and data rates may apply. Your mobile carrier sets those rates. We do not charge a fee for the text program.</p>
    <p>How to opt out. Text STOP to 888-559-2816 at any time. We will send one message confirming that you are unsubscribed, and you will receive no more texts from us. To join again, text REMIND.</p>
    <p>Help. Text HELP to 888-559-2816, email wanli26@gmail.com or call 206-393-8345.</p>
    <p>Eligibility. You must be at least 18 years old, or have a parent or guardian's permission, and you must be the account holder or authorized user of the mobile number you give us.</p>
    <p>Consent. Agreeing to receive texts is not a condition of buying any service from us. You can book appointments without enrolling in text reminders.</p>
    <p>Carriers. Mobile carriers are not liable for delayed or undelivered messages. Delivery is not guaranteed.</p>
    <p>Privacy. We use your phone number only to send the messages described here and to manage your appointments. We do not sell your information or share it with third parties for their marketing. Our full Privacy Policy is at https://joyful-sessions-site.lovable.app/privacy</p>
    <p>Changes. We may update these terms or end the text program. We will post changes on this page and update the effective date. If you keep using the program after a change, you accept the updated terms.</p>
    <p>Governing law. These terms are governed by the laws of WA.</p>
    <p>Contact. Wanli Consultancy LLC, wanli26@gmail.com, 206-393-8345</p>
  </main>;
}
