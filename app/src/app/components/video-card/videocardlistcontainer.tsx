import { VideoCardPropList } from "./videocardlist";

const data = [
    {
        imgurl: '/vid-1.png',
        title: 'Japan Brought the Medal Home!',
        date: 'June 15, 2022',
    },
    {
        imgurl: '/vid-2.png',
        title: 'A flashback on Karate',
        date: 'June 20, 2022',
    },
    {
        imgurl: '/vid-3.png',
        title: 'Proud Face of Japan’s Team',
        date: 'Feb 10, 2023',
    }
]

function VideoCardListContainer(){
    return(
        <div className="flex flex-row items-left justify-evenly rounded-3xl p-5">
            <VideoCardPropList cards={data}/>
        </div>
    );
}

export { VideoCardListContainer };