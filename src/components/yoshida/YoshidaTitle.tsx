type Props = {
  title: string;
};

const YoshidaTitle = (props: Props) => {
  const { title } = props;
  return (
    <div className="flex justify-center items-center w-[4%]">
      <h3 className="text-white font-inter text-lg">
        {title.split("").map((part, index) => (
          <span key={index} className="block transform rotate-90 text-center">
            {part}
          </span>
        ))}
      </h3>
    </div>
  );
};

export default YoshidaTitle;
