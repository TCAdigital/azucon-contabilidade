import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import UserProfiles from "@/components/UserProfiles";
import TrustSection from "@/components/TrustSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <UserProfiles />
      <TrustSection />
      <ContactCTA />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
