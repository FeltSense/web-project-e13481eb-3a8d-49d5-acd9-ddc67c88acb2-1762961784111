export default function Home() {
  return (
    <>
      {/* Hero component already includes navigation */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* Other sections would go here */}
      <div id="contact">
        <ContactForm />
      </div>
      
      <Footer />
    </>
  );
}

// Import only components that exist
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
