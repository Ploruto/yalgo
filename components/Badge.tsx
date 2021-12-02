
export interface IBadge{
    text: String;
    color: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" ;
}

export const Badge: React.FC<IBadge> = ({text, color}) => {
    return(
        <span className={"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-" + color + "-100 text-" + color + "-800"}>
            {text}
        </span>
    )

}

