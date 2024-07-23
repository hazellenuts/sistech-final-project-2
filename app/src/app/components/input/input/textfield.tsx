import React from "react";

type textInputProps = {
    placeholder : string;
}

function TextInput({placeholder} : textInputProps){
    return(
        <input className="w-96 h-9 rounded-lg border-2 border-gray-500 p-3 font-semibold text-sm text-black" type="text" name="" id="" placeholder={placeholder}/>
        
    );
}


export { TextInput };