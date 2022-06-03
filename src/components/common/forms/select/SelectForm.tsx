import { Select, Text } from "@chakra-ui/react";
import { ChangeEvent, SelectHTMLAttributes, useMemo } from "react";

type Option = { label: string; value: string | number };

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  optionsData: Option[];
  label?: string;
  onChangeEvt?: (data: string) => void;
  register?: any;
  formControlName?: string;
  options?: { required?: boolean; maxLength?: number; pattern?: string };
}

const SelectForm = (props: ISelectProps) => {
  const { placeholder, label, register, formControlName, options, optionsData, onChangeEvt, disabled, className} = props;
  const formProps = useMemo(() => {
    return register && formControlName
      ? { ...register(formControlName, options) }
      : null;
  }, [register, formControlName, options]);

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeEvt?.(event?.target.value);
  };

  return (
    <>
      {label && <Text mb="8px">{label}</Text>}
      <Select className={className}
        {...formProps} 
        placeholder={placeholder}
        onChange={handleOnChange}
        disabled={disabled}
        isRequired={options?.required}>
          {
              optionsData.map( option => (
                <option value={option.value}>{option.label}</option>
              ))
          }
      </Select>
    </>
  );
};

export default SelectForm;
