const Image = ({ className, src, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`${className} w-full bg-cover bg-no-repeat bg-top`}
    >
      {children ? children : null}
    </div>
  );
};

export default Image;
