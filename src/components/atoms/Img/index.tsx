interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

function Img(props: ImageProps): JSX.Element {
  return (
    <img {...props} />
  )
}

export default Img;
