import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const LegalAccordion = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 ease-in-out"
        onClick={onClick}
      >
        <h2 className="text-lg font-medium text-gray-900 text-left">{title}</h2>
        <ChevronDown
          className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 bg-white">
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default LegalAccordion;
