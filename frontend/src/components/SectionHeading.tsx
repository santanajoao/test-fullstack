type Props = {
  title: string;
  description: string;
}

export default function SectionHeading({ title, description }: Props) {
  return (
    <div className="text-[#6e747a] py-7">
      <h2 className="font-medium text-lg">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}
