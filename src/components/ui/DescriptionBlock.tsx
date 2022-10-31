interface Props {
    description: string;
    title?: string;
    children?: React.ReactNode;
    orientation?: "horizontal" | "vertical";
}
export default function DescriptionBlock({ description, title, children: callToActionElements, orientation = 'vertical' }: Props) {
    return (
        <div className={`description-block orientation-${orientation}`}>
            {title ? <h2 className="title">{title}</h2> : null}
            <p className="description">{description}</p>
            <div>{callToActionElements}</div>
        </div>
    );
}