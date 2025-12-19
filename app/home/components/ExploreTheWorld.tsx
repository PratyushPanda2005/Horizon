"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ExploreCard from "./ExploreCard";
import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

type World = {
    id: string;
    title: string;
    imgUrl: string;
};

const Explore = () => {
    const [active, setActive] = useState<string>(exploreWorlds[0].id);
    const isPaused = useRef<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused.current) {
                setActive((prev) => {
                    const currentIndex = exploreWorlds.findIndex(
                        (w: World) => w.id === prev
                    );
                    const nextIndex =
                        (currentIndex + 1) % exploreWorlds.length;
                    return exploreWorlds[nextIndex].id;
                });
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="explore" className={styles.paddings}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| The World" textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            Choose the world you want
                            <br className="hidden md:block" /> to explore
                        </>
                    }
                    textStyles="text-center"
                />

                <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
                    {exploreWorlds.map((world: World, index: number) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                            onHoverStart={() => {
                                isPaused.current = true;
                                setActive(world.id);
                            }}
                            onHoverEnd={() => {
                                isPaused.current = false;
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;
