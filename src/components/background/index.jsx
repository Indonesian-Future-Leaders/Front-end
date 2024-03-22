const Background = ({ className, src, children, ...props }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`${className ?? ""} w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative overflow-hidden`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Background;
