"use client";

import ContactCard from "@/app/components/contact/ContactCard";
import ContactFooter from "@/app/components/contact/ContactFooter";
import ContactForm from "@/app/components/contact/ContactForm";
import { Heading } from "@/app/components/Heading";

const ContactMe = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <Heading title=" Let's Connect and Create Something Amazing" />
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <ContactCard />
        </div>
        <ContactFooter />
      </div>
    </section>
  );
};

export default ContactMe;
