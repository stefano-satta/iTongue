import { Input, Text } from "@chakra-ui/react";
import {ChangeEvent, InputHTMLAttributes, useMemo} from "react";


type IInputProps = {
    label?: string;
    register?: any;
    formControlName?: string;
    options?: {required?: boolean, maxLength?: number, pattern?: string};
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    onChangeEvt: (word: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;


const InputForm = (props: IInputProps) => {
    const {label, register, formControlName, options, variant, placeholder, onChangeEvt, width} = props;

    const formProps = useMemo(() => {
        return register && formControlName ? {...register(formControlName, options)}: null;
    }, [register, formControlName, options]);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        onChangeEvt?.(e.target.value);
    }

    return (<>
        {label && <Text mb='8px'>{label}</Text>}
        <Input {...formProps} placeholder={placeholder}
               variant={variant}
               onChange={handleOnChange}/>
    </>)
}

export default InputForm;