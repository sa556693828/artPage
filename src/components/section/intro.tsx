import Image from "next/image";

const introPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-title font-bold text-center mb-8">
        淺談來者與趙墨畫
      </h1>

      <nav className="mb-12">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#" className="hover:text-blue-600">
              成長歷程
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              發現趙墨
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              落實趙墨
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              趙墨大事記
            </a>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">說趙墨</h2>
          <p className="mb-4">
            {`何謂趙墨畫？它是"趙"字的拆解字(走、取)個別意思的組合，亦即它先在宣紙上潑墨，然後加水在上面，讓它有技巧的錯陳"走"墨，因而獲"取"的畫面`}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="relative">
              <Image
                src={`/path-to-image-${num}.jpg`}
                alt={`Service ${num}`}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <h3 className="font-semibold">Service {num}</h3>
                <p className="text-sm">
                  A short description of the service and how the visitor will
                  benefit from it.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default introPage;
