import { HistoryCard } from "./historycard";
import type { historyCardProps } from "./historycard";

type historyCardPropList = {
    cards: historyCardProps[]
}

function HistoryCardPropList({cards}: historyCardPropList){
    return(
        <div className="flex flex-col items-center justify-between gap-5">
            {cards.map((card,index) => (
                <HistoryCard key={index} {...card}/>
            ))}
        </div>
    );
}

export { HistoryCardPropList };

