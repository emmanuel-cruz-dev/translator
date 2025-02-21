import { type FC } from "react";
import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAGES } from "../constants/constants";

interface Props {
  onChange: (language: string) => void;
}

export const LanguageSelector: FC<Props> = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
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
