import { Helmet } from "react-helmet-async";
import { MdPhone } from "react-icons/md";
import DetailCard from "@/components/sections/contactUs/ContactDetailCard";
import ContactForm from "@/components/sections/contactUs/ContactForm";
import ContactHero from "@/components/sections/contactUs/ContactHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import data from "@/data/siteData.json";

export default function ContactUs() {
  const { contact } = data.pages;
  const { company } = data;
  return (
    <>
      <Helmet>
        <title>Contact Us | JM Purefoods Pty Ltd</title>
        <meta
          name="description"
          content="Get in touch with JM Purefoods Pty Ltd. Located in Pakenham VIC. ABN 91 690 274 901."
        />
        <meta property="og:title" content="Contact Us | JM Purefoods" />
        <meta
          property="og:description"
          content="Send an enquiry to JM Purefoods Pty Ltd. We'll get back to you shortly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jmpurefoods.com.au/contact" />
        <link rel="canonical" href="https://jmpurefoods.com.au/contact" />
      </Helmet>
      <ContactHero />

      {/* Contact detail cards */}
      <section className="bg-off-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contact.contactDetails.map((item) => (
              <StaggerItem key={item.label}>
                <DetailCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form + company info */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            {/* Left — form */}
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest
                    text-brand mb-2"
                  >
                    Send us a message
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">
                    Let's Start a Conversation
                  </h2>
                  <div className="w-8 h-0.5 bg-gold rounded-full" />
                </div>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Right — company info */}
            <AnimatedSection delay={0.15}>
              <div className="flex flex-col gap-8">
                {/* About */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-text-dark">
                    JM PUREFOODS PTY LTD
                  </h3>
                  <div className="w-8 h-0.5 bg-gold rounded-full" />
                  <p className="text-sm text-text-muted leading-relaxed">
                    {company.description}
                  </p>
                </div>

                {/* Map placeholder */}
                <div
                  className="rounded-2xl overflow-hidden border border-gray-100
                  shadow-sm aspect-video bg-gray-100 flex items-center justify-center"
                >
                  <iframe
                    title="JM Purefoods location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5!2d145.487!3d-38.071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2+Exchange+Dr%2C+Pakenham+VIC+3810!5e0!3m2!1sen!2sau!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 220 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1e4028" }}>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Prefer to talk directly?
          </h2>
          <p className="text-white/60 text-sm">
            Call us during business hours and we'll be happy to help.
          </p>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="
              inline-flex items-center gap-2
              bg-gold hover:bg-gold-light
              text-white text-sm font-semibold
              uppercase tracking-widest
              px-8 py-3.5 rounded-xl
              transition-colors duration-200
            "
          >
            <MdPhone size={16} />
            {company.phone}
          </a>
        </div>
      </section>
    </>
  );
}
