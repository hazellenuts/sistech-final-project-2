import React from "react";
import Image from "next/image";
import { HistoryCardListContainer } from "../components/history/historycardlistcontainer";
import Header from "../components/header";

export default function Video(){
    return(
        <div>
            <Header/>
            <main className="w-screen  flex flex-col justify-between bg-gray-100 text-black">
                <div className="flex flex-col items-center justify-center p-10 bg-gray-200 h-[250px]">
                    <h1 className="font-bold text-ocean-600 text-3xl">Video</h1>
                    <p className="font-semibold text-center">Explore a wide range of videos designed to enhance your Japanese language skills and cultural understanding. From JLPT preparation to cultural documentaries, our collection is tailored to support learners at all levels.</p>
                </div>
                <div className="flex flex-row gap-10 items-center justify-evenly p-10">
                    <div className="flex flex-col items-left justify-center">
                        <h3 className="font-bold text-2xl text-ocean-600">Featured Video</h3>
                        <Image src="/video.png" width={700} height={500} alt="video"/>
                        <h4 className="font-bold text-xl text-black">Everything About Olympic 2024</h4>
                        <p className="font-semibold text-lg">July 14, 2024</p>
                    </div>
                    {/** watch history */}
                    <HistoryCardListContainer/>
                </div>
            </main>
        </div>
    );
}