"use client";
import { useState } from "react";
import LegalAccordion from "../components/LegalAccordian";

const termsAndConditions = [
  {
    title: "Accounts and membership",
    content:
      "If you create an account in the Mobile Application, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.",
  },
  {
    title: "User content",
    content:
      'We do not own any data, information or material (collectively, "Content") that you submit in the Mobile Application in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may monitor and review the Content in the Mobile Application submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you.',
  },
  {
    title: "Backups",
    content:
      "We are not responsible for the Content residing in the Mobile Application. In no event shall we be held liable for any loss of any Content. It is your sole responsibility to maintain appropriate backup of your Content. Notwithstanding the foregoing, on some occasions and in certain circumstances, with absolutely no obligation, we may be able to restore some or all of your data that has been deleted as of a certain date and time when we may have backed up data for our own purposes. We make no guarantee that the data you need will be available.",
  },
  {
    title: "Links to other resources",
    content:
      "Although the Mobile Application and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link in the Mobile Application. Your linking to any other off-site resources is at your own risk.",
  },
  {
    title: "Prohibited uses",
    content:
      "In addition to other terms as set forth in the Agreement, you are prohibited from using the Mobile Application and Services or Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Mobile Application and Services, third party products and services, or the Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; (i) for any obscene or immoral purpose; or (j) to interfere with or circumvent the security features of the Mobile Application and Services, third party products and services, or the Internet. We reserve the right to terminate your use of the Mobile Application and Services for violating any of the prohibited uses.",
  },
  {
    title: "Intellectual property rights",
    content:
      '"Intellectual Property Rights" means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world. This Agreement does not transfer to you any intellectual property owned by Encipherer or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with Encipherer.',
  },
  {
    title: "Feedback and Suggestions",
    content:
      "We welcome your feedback and suggestions for improving Sahulat. By providing feedback, you agree that we may use your feedback without any obligation to compensate you.",
  },
  {
    title: "Promotions, Contests, and Sweepstakes",
    content:
      "From time to time, we may offer promotions, contests, or sweepstakes. Any such activities will be governed by additional terms and conditions, which will be made available to you at the time of the activity.",
  },
  {
    title: "In-App Purchases",
    content:
      "Sahulat offers in-app purchases for additional features and services. All purchases are final and non-refundable, except as required by applicable law.",
  },
  {
    title: "Changes and amendments",
    content:
      "We reserve the right to modify this Agreement or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided. An updated version of this Agreement will be effective immediately upon the posting of the revised agreement, unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Agreement (or any other act specified at that time) will constitute your consent to those changes.",
  },
  {
    title: "Acceptance of these terms",
    content:
      "You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Mobile Application and services, you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Mobile Application and Services.",
  },
  {
    title: "Contacting us",
    content:
      "If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below: info@onlinesahulat.pk +92 305 630 2602",
  },
];

export default function TermsContent() {
  const [expandedSection, setExpandedSection] = useState<number | false>(false);

  const handleAccordionClick = (index: number) => {
    setExpandedSection(expandedSection === index ? false : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-4 pb-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Terms and Conditions
        </h1>

        <p className="text-gray-600 text-center mb-8">
          These terms and conditions (&quot;Agreement&quot;) set forth the
          general terms and conditions of your use of the &quot;Sahulat&quot;
          mobile application (&quot;Mobile Application&quot; or
          &quot;Service&quot;) and any of its related products and services
          (collectively, &quot;Services&quot;).
        </p>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          {termsAndConditions.map((section, index) => (
            <LegalAccordion
              key={index}
              title={section.title}
              content={section.content}
              isOpen={expandedSection === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          This document was last updated on July 15, 2024
        </p>
      </div>
    </div>
  );
}
