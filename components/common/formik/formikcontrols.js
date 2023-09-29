import BootstrapInput from './bootstrap_input'

import BootstrapCheckbox from "./bootstrap_checkbox";

import Input from './input';
import Textarea from "./textarea";
import Checkbox from './checkbox';
import Select from './select';
import FileUpload from './fileupload';

import ReactSelect from "./reactSelect";
import RadioButtons from "./radioButton";
import DatePicker from "./datePicker";




export default function FormikControl(props) {
    const { controls, ...rest } = props;


    switch (controls) {
        case "bootstrap_input": return <BootstrapInput {...rest} />
        case "bootstrap_checkbox": return <BootstrapCheckbox {...rest} />
        case "input": return <Input {...rest} />
        case "textarea": return <Textarea {...rest} />
        case "checkbox": return <Checkbox {...rest} />
        case "select": return <Select {...rest} />
        case "file": return <FileUpload {...rest} />
        case "reactSelect": return <ReactSelect {...rest} />
        case "radio": return <RadioButtons {...rest} />
        case "date": return <DatePicker {...rest} />

            
            

        default: return null




    }

}