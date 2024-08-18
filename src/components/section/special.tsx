import Image from "next/image";

const SpecialPage = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-title font-bold text-center mb-12">
          趙墨畫四大特色
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "這種畫在外面買不到，因為沒有人在賣。",
            "這種畫在外面買不到偽品，因為沒有人可以模仿。",
            "這種畫的價值很高，因為有北京故宮肯收藏。",
            "這種畫的價格很好，因為誰擁有它，誰就擁有大英博物館館藏級的藏品。",
          ].map((text, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialPage;
