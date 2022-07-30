import { ChangeEvent, InputHTMLAttributes, useMemo } from "react";
import { Input } from "react-daisyui";

type InputProps = {
  label?: string;
  register?: any;
  formControlName?: string;
  options?: { required?: boolean; maxLength?: number; pattern?: string };
  onChangeEvt?: (word: string) => void;
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputForm = (props: InputProps) => {
  const {
    label,
    register,
    formControlName,
    options,
    placeholder,
    onChangeEvt,
    type,
    accept,
    width,
    className
  } = props;

  const formProps = useMemo(() => {
    return register && formControlName
      ? { ...register(formControlName, options) }
      : null;
  }, [register, formControlName, options]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    onChangeEvt?.(e.target.value);
  };

  return (
    <>
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2">
        { label && 
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        }
        <Input
          {...formProps}
          type={type}
          className={className}
          placeholder={placeholder}
          onChange={handleOnChange}
          width={width}
          accept={accept}/>
      </div>
    </>
  );
};

export default InputForm;
