export type MissionLabelProps = {
    id: number;
    label: string;
};

export type MissionProps = {
    image: string | undefined;
    alt: string | undefined;
} & MissionLabelProps;
