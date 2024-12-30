export const ExternalLinkWithReferrer = () => {
  const referrer = window.location.href;
  const targetUrl = `https://vendor.onlinesahulat.pk?referrer=${encodeURIComponent(
    referrer
  )}`;
  window.open(targetUrl, "_blank");
};

export function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
