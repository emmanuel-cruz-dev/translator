import { Form } from "react-bootstrap";
import { ChangeEvent, FC } from "react";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const commonStyles = { border: 0, height: "200px" };

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type == SectionType.From) return "Introducir texto";
  if (loading == true) return "Cargando...";
  return "Traducción";
};

export const TextArea: FC<Props> = ({ type, loading, value, onChange }) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      disabled={type == SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
