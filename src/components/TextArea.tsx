import { Form } from "react-bootstrap";
import { FC } from "react";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  placeholder: string;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

export const TextArea: FC<Props> = ({
  type,
  placeholder,
  loading,
  value,
  onChange,
}) => {
  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      placeholder={placeholder}
      style={{ height: "150px" }}
    />
  );
};
