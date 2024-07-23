import React from "react"
import Image from "next/image";


type footerProp = {
    classname : string;
}
function Footer({classname} : footerProp){
    return(
        <div className={`w-full flex flex-row justify-end items-center  bg-gray-200 font-semibold text-sm text-gray-600 p-7 gap-4 ${classname}`}>
            <Image src="/footer-icon.svg" alt="icon" width={20} height={20}></Image>
            <h4>2024, Sister In Tech inc. All rights reserved</h4>
        </div>
    );
}

export { Footer };