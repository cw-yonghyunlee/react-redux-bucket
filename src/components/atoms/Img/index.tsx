interface ImageProps {
  src: string;
  alt?: string;
}

function Img(props: ImageProps): JSX.Element {
  const { src, alt } = props;
  return (
    <img src={src} alt={alt}/>
  )
}

export default Img;
