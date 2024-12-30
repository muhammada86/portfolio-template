"use client";
import { useState } from "react";
import LegalAccordion from "../components/LegalAccordian";

const privacyPolicy = [
  {
    title: "Interpretation and Definitions",
    content:
      "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
  },
  {
    title: "Collecting and Using Your Personal Data",
    content:
      "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Usage Data.",
  },
  {
    title: "Use of Your Personal Data",
    content:
      "The Company may use Personal Data for the following purposes: To provide and maintain our Service, to manage Your Account, for the performance of a contract, to contact You, to provide You with news and offers, to manage Your requests, for business transfers, and for other purposes such as data analysis and improving our Service.",
  },
  {
    title: "Retention of Your Personal Data",
    content:
      "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.",
  },
  {
    title: "Transfer of Your Personal Data",
    content: `Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.`,
  },
  {
    title: "Delete Your Personal Data",
    content:
      "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service may give You the ability to delete certain information about You from within the Service.",
  },
  {
    title: "Disclosure of Your Personal Data",
    content:
      "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to: Comply with a legal obligation; Protect and defend the rights or property of the Company; Prevent or investigate possible wrongdoing in connection with the Service; Protect the personal safety of Users of the Service or the public; Protect against legal liability.",
  },
  {
    title: "Security of Your Personal Data",
    content:
      "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.",
  },
  {
    title: "Links to Other Websites",
    content:
      "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
  },
  {
    title: "Changes to this Privacy Policy",
    content:
      'We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.',
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, You can contact us: By email: info@onlinesahulat.pk By phone number: +92 305 630 2602",
  },
];

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState<number | false>(false);

  const handleAccordionClick = (index: number) => {
    setExpandedSection(expandedSection === index ? false : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-4 pb-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-center mb-8">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          {privacyPolicy.map((section, index) => (
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
