import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type ExploreCardProps = {
    id: string;
    title: string;
    imgUrl: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
    onHoverStart: () => void;
    onHoverEnd: () => void;
};

const ExploreCard = ({
    id,
    title,
    imgUrl,
    index,
    active,
    handleClick,
    onHoverStart,
    onHoverEnd,
}: ExploreCardProps) => {
    const isActive = active === id;

    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            onClick={() => handleClick(id)}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className={`
        relative cursor-pointer overflow-hidden rounded-[24px]
        ${isActive ? "lg:flex-[3.5]" : "lg:flex-[0.5]"}
        flex-[1] transition-[flex] duration-500 ease-out
      `}
        >
            <img
                src={imgUrl}
                alt={title}
                className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            {isActive && (
                <div className="absolute bottom-0 p-8">
                    <h2 className="text-white text-[32px] font-semibold">
                        {title}
                    </h2>
                </div>
            )}
        </motion.div>
    );
};

export default ExploreCard;
