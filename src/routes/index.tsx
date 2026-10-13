import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock3, Compass, Sprout, Sun, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lakeImage from '@/assets/northwest-lake.jpg';

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Wanli Consultancy LLC | Seattle Lifestyle Coaching' },
    { name: 'description', content: 'A thoughtful approach to lifestyle coaching in Seattle, WA. Contact Wanli Consultancy LLC to book. Hours: 3pm–10pm PT.' },
    { property: 'og:title', content: 'Wanli Consultancy LLC | Seattle Lifestyle Coaching' },
    { property: 'og:description', content: 'Find clarity, build everyday habits, and move forward with thoughtful lifestyle coaching.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  return <main>
    <section className="hero" aria-labelledby="home-title">
      <img className="hero-image" src={lakeImage} alt="A peaceful lake surrounded by evergreen forests and misty Pacific Northwest mountains" width={1536} height={1024} fetchPriority="high" />
      <div className="hero-content site-width">
        <div className="eyebrow">A calmer way forward</div>
        <h1 id="home-title">Wanli<br />Consultancy LLC</h1>
        <p className="hero-copy">Thoughtful lifestyle coaching to help you find clarity, create balance, and make space for what matters.</p>
        <Button asChild variant="secondary" className="booking-button"><a href="https://book.wanlilau.workers.dev" target="_blank" rel="noopener noreferrer">Book an appointment <ArrowUpRight /></a></Button>
        <p className="hero-note">Based in Seattle, Washington</p>
      </div>
    </section>
    <section className="services site-width" aria-labelledby="services-title">
      <div className="section-intro">
        <div><div className="section-label">Lifestyle coaching</div><h2 id="services-title">A thoughtful path forward.</h2></div>
        <p>Life doesn’t need to change all at once. Coaching offers space to reflect on where you are, explore what matters to you, and take meaningful steps forward.</p>
      </div>
      <div className="service-grid">
        <article className="service-item"><Compass className="service-icon" /><h3>Clarity & direction</h3><p>Explore your priorities and personal goals to find a direction that feels right for you.</p></article>
        <article className="service-item"><Sprout className="service-icon" /><h3>Everyday habits</h3><p>Turn your intentions into small, practical changes that support your everyday life.</p></article>
        <article className="service-item"><Sun className="service-icon" /><h3>Balance & well-being</h3><p>Reflect on your routines and boundaries to make more room for what matters most.</p></article>
      </div>
    </section>
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-grid site-width">
        <div><div className="section-label">Let’s connect</div><h2 id="contact-title">Your next chapter<br />starts with a conversation.</h2><p className="contact-description">Reach out by phone or email to ask a question or book a coaching session.</p>
          <div className="hours"><Clock3 /><div><div className="hours-label">Hours</div><div>3pm – 10pm PT <span className="text-muted-foreground">· Pacific Time</span></div></div></div>
        </div>
        <address className="contact-list not-italic">
          <a className="contact-row" href="tel:+12063938345"><Phone /><div><span className="contact-row-label">Phone</span><span className="contact-row-value">206-393-8345</span></div><ArrowUpRight /></a>
          <a className="contact-row" href="mailto:wanlilau1234@gmail.com"><Mail /><div><span className="contact-row-label">Email</span><span className="contact-row-value">wanlilau1234@gmail.com</span></div><ArrowUpRight /></a>
          <div className="contact-row"><MapPin /><div><span className="contact-row-label">Address</span><span className="contact-row-value">752 Summerhill Ridge Dr NW<br />Issaquah, WA</span></div></div>
        </address>
      </div>
    </section>
  </main>;
}
