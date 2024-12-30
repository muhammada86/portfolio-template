import { Footer } from "../(root)/components/Footer";
import { Header } from "../(root)/components/Header";
import AboutUsContent from "./content";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <AboutUsContent />

      <Footer />
    </div>
  );
}
