import { Textarea, Text } from "@chakra-ui/react";
import { ChangeEvent, TextareaHTMLAttributes, useMemo } from "react";

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
        variant,
        placeholder,
        onChangeEvt,
        width,
        style,
        resize = false
      } = props;
    
    const formProps = useMemo(() => {
        return register && formControlName
            ? { ...register(formControlName, options) }
            : null;
    }, [register, formControlName, options]);

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeEvt?.(e.target.value);
    };

    return (<>
        {label && <Text mb="8px">{label}</Text>}
        <Textarea {...formProps} 
            placeholder={placeholder}
            variant={variant}
            onChange={handleOnChange}
            width={width} 
            style={style}
            resize={resize}/>
    </>)
}

export default TextAreaForm;