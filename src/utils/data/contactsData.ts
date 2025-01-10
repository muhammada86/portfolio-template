import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const contactsData = {
  email: "muhammadaqib86@gmail.com",
  phone: "+923484124477",
  address: "House #2, Street #3, Kharian, Gujrat",
  github: "https://github.com/muhammada86",
  facebook: "https://www.facebook.com/muhammad.aqib.3701",
  linkedIn: "https://www.linkedin.com/in/muhammad-aqib-333640161/",
  twitter: "https://twitter.com/#",
  stackOverflow: "https://stackoverflow.com/users/11119419/muhammad-aqib",
  devUsername: "muhammadaqib86",
};

export const whyWorkWithMe =
  "I'm passionate about creating exceptional digital experiences. With a keen eye for detail and a commitment to excellence, I'll bring your vision to life. Let's collaborate and turn your ideas into reality!";

export const socialLinks = [
  {
    icon: Mail,
    text: contactsData.email,
    href: `mailto:${contactsData.email}`,
  },
  {
    icon: Phone,
    text: contactsData.phone,
    href: `tel:${contactsData.phone}`,
  },
  { icon: MapPin, text: contactsData.address },
  { icon: Github, text: "GitHub", href: contactsData.github },
  {
    icon: Linkedin,
    text: "LinkedIn",
    href: contactsData.linkedIn,
  },
  {
    icon: Facebook,
    text: "Facebook",
    href: contactsData.facebook,
  },
  {
    icon: Twitter,
    text: "Twitter",
    href: contactsData.twitter,
  },
];
