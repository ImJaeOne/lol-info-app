const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">아이템을 불러오는 중...</p>
    </div>
  );
};

export default Loading;
