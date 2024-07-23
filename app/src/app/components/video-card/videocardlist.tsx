import { VideoCard } from "./videocard";
import type { VideoCardProps } from "./videocard";

type VideoCardPropList = {
    cards: VideoCardProps[]
}

function VideoCardPropList({cards}: VideoCardPropList){
    return(
        <div className="flex flex-row items-center justify-between gap-5">
            {cards.map((card,index) => (
                <VideoCard key={index} {...card}/>
            ))}
        </div>
    );
}

export { VideoCardPropList };

