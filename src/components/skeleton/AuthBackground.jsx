import Filter from "../filter";

const AuthBackground = (
  <div className="flex items-center justify-center w-full h-screen animate-pulse relative">
    <Filter intent="primary" />
    <div className="w-full flex flex-col items-center p-8 content-center border shadow bg-light-fade max-w-sm rounded-3xl">
      <div className="h-4 bg-gray-100 rounded-full w-16 mb-4"></div>
      <div className="h-2 bg-gray-100 rounded-full w-32 mb-2.5"></div>
      <div className="h-2 bg-gray-100 rounded-full w-32 mb-10"></div>
      <div className="h-8 bg-gray-100 w-full mb-4"></div>
      <div className="h-8 bg-gray-100 w-full mb-2"></div>
      <div className="h-2 bg-gray-100 rounded-full w-20 mb-10"></div>
      <div className="h-6 bg-gray-100 rounded-full w-full mb-8"></div>
    </div>
  </div>
);

export default AuthBackground;
