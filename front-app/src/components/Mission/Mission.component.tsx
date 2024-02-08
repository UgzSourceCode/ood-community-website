import { MissionProps } from "./Mission.types.ts";
import { MissionLabel } from "./MissionLabel.component.tsx";

export const Mission = ({ id, image, alt, label }: MissionProps) => {
    return (
        <div
            className={`flex flex-col ${id % 2 ? "md:flex-row md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6" : "md:flex-row-reverse md:items-center md:justify-center w-full px-6 space-y-4 md:space-x-6 md:space-x-reverse"}`}
        >
            <div className="flex">
                <MissionLabel id={id} label={label} />
            </div>
            <div className="flex justify-end w-full md:w-2/5 lg:w-1/4">
                <div className="flex w-1/2 md:w-full">
                    <div className="w-full overflow-hidden aspect-w-4 aspect-h-3">
                        <img src={image} alt={alt} />
                    </div>
                </div>
            </div>
        </div>
    );
};
