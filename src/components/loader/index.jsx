import { Triangle } from "react-loader-spinner";

const Loading = ({ height, width, className }) => {
  return (
    <Triangle
      wrapperClass={`flex justify-center items-center ${className ?? ""}`}
      height={height}
      width={width}
      color="#0096C7"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loading;
