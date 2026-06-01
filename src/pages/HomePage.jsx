import Hero from '../components/landing/Hero';
import Benefits from '../components/landing/Benefits';
import Services from '../components/landing/Services';
import ContactForm from '../components/landing/ContactForm';

function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Services />
      <ContactForm />
    </main>
  );
}

export default HomePage;