interface Props {
    title: string;
}

export const CustomTitle = ({ title }: Props) => {
    return (
        <h1 className="staatliches-font text-6xl text-center md:text-5xl md:text-left text-white">{title}</h1>
    )
}
