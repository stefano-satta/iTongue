import {SelectHTMLAttributes, useMemo} from "react";
import { Select } from "react-daisyui";

export type Option = { label: string; value: string | number };

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  optionsData: Option[];
  label?: string;
  onChangeEvt?: (data: string) => void;
  register?: any;
  formControlName?: string;
  options?: { required?: boolean; maxLength?: number; pattern?: string };
}

const SelectForm = (props: ISelectProps) => {
  const {
    placeholder,
    label,
    register,
    formControlName,
    options,
    optionsData,
    onChangeEvt,
    disabled,
    className
  } = props;

  const formProps = useMemo(() => {
    return register && formControlName
      ? { ...register(formControlName, options) }
      : null;
  }, [register, formControlName, options]);

  const handleOnChange = (langSelected: string) => {
    onChangeEvt?.(langSelected);
  };

  return (
    <>
      { label && 
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      }
      <Select
        className={className}
        {...formProps}
        placeholder={placeholder}
        onChange={handleOnChange}
        disabled={disabled}
        required={options?.required}
        defaultValue={undefined}
        >
          {optionsData.map((option) => (
            <Select.Option value={option.value} 
                           key={`${option.value}-${option.label}`} 
                           disabled={!option.value} 
                           selected={!option.value}>
              {option.label}
            </Select.Option>
          ))}
      </Select>
    </>
  );
};

export default SelectForm;
