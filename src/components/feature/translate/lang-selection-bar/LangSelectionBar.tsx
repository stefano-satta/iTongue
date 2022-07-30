import { useMemo } from "react";
import SelectForm, { Option } from "../../../common/forms/select/SelectForm";

interface ILangSelectionBarProps {
  langsList: Language[];
  onChangeLangEvt: (langs: { fromLang?: string; toLang?: string }) => void;
}

const LangSelectionBar = (props: ILangSelectionBarProps) => {
  const { langsList, onChangeLangEvt } = props;
  let langOptions: Option[] = useMemo(() => {
    return langsList.map((lang) => {
      return { label: lang.name, value: lang.code };
    });
  }, [langsList]);
  langOptions = [...langOptions, {value: undefined as any, label:' Select language'}];

  const handleOnchange = ({fromLang, toLang}: {fromLang?: string;toLang?: string;}) => {
    if (fromLang) {
      onChangeLangEvt({fromLang});
    }
    if (toLang) {
      onChangeLangEvt({toLang})
    }
  };

  return (
    <div className="flex justify-center my-12">
      <div className="flex items-center mr-12">
        <label>From:</label>
        <SelectForm
          className="ml-2"
          optionsData={langOptions}
          placeholder="Select language"
          onChangeEvt={(lang) => handleOnchange({ fromLang: lang })}/>
      </div>
      <div className="flex items-center mr-12">
        <label>To:</label>
        <SelectForm
          className="ml-2"
          optionsData={langOptions}
          placeholder="Select language"
          onChangeEvt={(lang) => handleOnchange({ toLang: lang })}/>
      </div>
    </div>
    // <HStack display="flex" justifyContent="center" className="my-10">
    //   <Box display="flex" alignItems="center" className="mr-15">
    //     <span className="mr-5">From: </span>
    //     <SelectForm
    //       optionsData={langOptions}
    //       placeholder="Select language"
    //       onChangeEvt={(lang) => handleOnchange({ fromLang: lang })}
    //     />
    //   </Box>
    //   <Box display="flex" alignItems="center">
    //     <span className="mr-5">To:</span>
    //     <SelectForm
    //       optionsData={langOptions}
    //       placeholder="Select language"
    //       onChangeEvt={(lang) => handleOnchange({ toLang: lang })}
    //     />
    //   </Box>
    // </HStack>
  );
};

export default LangSelectionBar;
