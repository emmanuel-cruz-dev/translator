import { type ChangeEvent, type FC } from "react";
import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAGES } from "../constants/constants";
import { FromLanguage, Language } from "../types";

// interface Props {
//   onChange: (language: Language) => void;
// }

type Props =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: "to";
      value: Language;
      onChange: (language: Language) => void;
    };

export const LanguageSelector: FC<Props> = ({ onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <Form.Select aria-label="Selecciona el idioma" onChange={handleChange}>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
