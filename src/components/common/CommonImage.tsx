import Image, { ImageProps } from "next/image";

type CommonImageProps = ImageProps & {
  alt: string;
  divProps?: React.HTMLAttributes<HTMLDivElement>;
};

const CommonImage = (props: CommonImageProps) => {
  const { divProps, alt, ...imageProps } = props;
  return (
    <div
      {...divProps}
      style={{
        letterSpacing: 0,
        wordSpacing: 0,
        fontSize: 0,
      }}
    >
      <Image alt={alt} {...imageProps} />
    </div>
  );
};

export default CommonImage;
