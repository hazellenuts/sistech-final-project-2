import Image from "next/image";

type historyCardProps = {
    imgurl:string,
    title:string,
    date:string,
}

function HistoryCard({imgurl,title,date}:historyCardProps){
    return(
        <div className="flex flex-row items-center justify-start gap-5 w-4/5">
            <Image src={imgurl} alt={title} width={100} height={100}/>
            <div className="flex flex-col items-left justify-start flex-wrap">
                <h5 className="font-bold text-black text-md">{title}</h5>
                <p className="font-semibold text-gray-600 text-sm">{date}</p>
            </div>
        </div>
    );
}

export { HistoryCard };
export type {historyCardProps};