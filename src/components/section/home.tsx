import Image from "next/image";
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex items-center text-black">
        <div className="w-1/2 pr-8">
          <h1 className="text-title mb-4">遇見國寶</h1>
          <p className="mb-4">全球第一個在世畫家書作</p>
          <p className="mb-4">同時被大英博物館、北京故宮等</p>
          <p className="mb-4">多個世界級博物館所典藏...</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="w-1/2">
          <Image
            src="/path-to-your-image.jpg"
            alt="劉慶書"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
