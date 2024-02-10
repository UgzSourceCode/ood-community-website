import { EventTileProps } from "./Events.types.ts";
import { useState } from "react";
import { Link } from "react-router-dom";
import EventPlaceholder from "../../assets/event-placeholder.png";

export const EventTile = ({ description, image, target, title }: EventTileProps) => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-md gap-y-2">
            <div className="w-full overflow-hidden rounded-lg cursor-auto aspect-w-1 aspect-h-1">
                <img
                    style={loading ? { display: "none" } : {}}
                    alt={description}
                    src={!image ? EventPlaceholder : image}
                    className={`duration-700 ease-in-out group-hover:opacity-75 object-cover ${loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
                    onLoad={() => setLoading(false)}
                />
            </div>
            <h2 className="text-lg md:text-xl font-bold cursor-pointer hover:text-[#09AFC6]">
                <Link to={target || ""} target="_blank">
                    {title}
                </Link>
            </h2>
            <p className="flex justify-center text-md md:pb-1">{description}</p>
        </div>
    );
};
