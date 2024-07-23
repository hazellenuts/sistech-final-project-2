import { HistoryCardPropList } from "./historycardlist";

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

function HistoryCardListContainer(){
    return(
        <div className="flex flex-col items-left justify-evenly bg-white rounded-3xl p-5">
            <h4 className="font-bold text-lg text-ocean-600 px-10">Your Watch History</h4>
            <HistoryCardPropList cards={data}/>
        </div>
    );
}

export { HistoryCardListContainer };