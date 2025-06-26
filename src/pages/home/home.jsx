import React from "react";
import NavBar from "../../components/navBar/navBar";
import Title from "../../components/title/title";
import Video from "../../assets/videos/videoCamisas.mp4";
import { useEffect, useRef } from "react";
import SideScroll from "../../components/sideScroll/sideScroll";

const home = () => {
    const videoRef = React.useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <>
            <Title />
            <section className="bg-black flex align-middle shadow-2xl shadow-black/70" style={{ height: "55vh" }}>
                <video
                    src={Video}
                    className="w-screen"
                    autoPlay
                    loop
                    muted
                />
            </section>

            <SideScroll />

            <NavBar />

        </>
    )
}

export default home;