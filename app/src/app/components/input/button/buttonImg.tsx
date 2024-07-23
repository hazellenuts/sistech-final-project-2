import React, {ReactNode} from "react";
import Image from "next/image";

type imgButtonProp = {
    children: ReactNode;
    icon : string;
    classname : string;
}

function ImgButton({children,icon,classname}: imgButtonProp){
    return(
        <button className={`flex flex-row font-semibold items-center text-ocean-500 gap-4 border-2 border-ocean-600 ${classname} hover:bg-ocean-300 hover:text-white hover:border-ocean-300`}>
            {children}
            <Image src={icon} alt="icon" width={25} height={25}></Image>
        </button>
    );
}

export { ImgButton };