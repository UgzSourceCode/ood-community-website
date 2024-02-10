export type EventData = {
    id: number;
    title: string;
    description: string;
    image: string | undefined;
    target: string | undefined;
};

export type EventTileProps = {} & EventData;
