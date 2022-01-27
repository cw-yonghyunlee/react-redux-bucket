interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Img(props: ImageProps): JSX.Element {
  return (
    <img {...props} />
  );
}

export default Img;
