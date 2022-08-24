import { ChangeEvent, TextareaHTMLAttributes, useMemo } from "react";
import { Textarea } from "react-daisyui";

type TextAreaProps = {
    label?: string;
    register?: any;
    formControlName?: string;
    options?: { required?: boolean; maxLength?: number; pattern?: string };
    variant?: "outline" | "filled" | "flushed" | "unstyled";
    onChangeEvt?: (word: string) => void;
    width?: string;
    resize?: boolean;
  } & TextareaHTMLAttributes<HTMLTextAreaElement>;


const TextAreaForm = (props: TextAreaProps) => {
    const {
        label,
        register,
        formControlName,
        options,
        className,
        variant,
        placeholder,
        onChangeEvt,
        width,
        style,
        resize
      } = props;
    
    const formProps = useMemo(() => {
        return register && formControlName
            ? { ...register(formControlName, options) }
            : null;
    }, [register, formControlName, options]);

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeEvt?.(e.target.value);
    };

    return (
    <div className="w-full h-full component-preview gap-2">
        { label && 
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
        }
        <Textarea {...formProps}
            placeholder={placeholder}
            variant={variant}
            className={className}
            onChange={handleOnChange}
            width={width} 
            style={style}
            resize={resize}/>
    </div>
    )
}

export default TextAreaForm;