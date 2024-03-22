const Image = ({ className, src, description, ...props }) => (
  <img loading="lazy" src={src} alt={`image ${description}`} className={`${className ?? ""} transition-all duration-300`} {...props} />
);

export default Image;
