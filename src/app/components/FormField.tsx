import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
  disabled?: boolean;
}

const FormField: FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  isTextarea = false,
  disabled = false,
}) => {
  const InputComponent = isTextarea ? Textarea : Input;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`text-white text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:text-white peer-focus:text-sm ${
          disabled ? "opacity-50" : ""
        }`}
      >
        {label}
      </label>
      <InputComponent
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${
          !isTextarea ? "my-2" : ""
        } bg-transparent border-b border-purple-400 focus:border-white transition-colors duration-300 text-white placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed`}
        required
      />
    </div>
  );
};

export default FormField;
