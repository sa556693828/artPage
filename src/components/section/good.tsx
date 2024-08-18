import Image from "next/image";

const GoodPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-title text-center mb-4">作品賞析</h2>
        <p className="text-center text-gray-600 mb-12">
          This is a place to showcase the logos of some of your clients
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((num) => (
            <div key={num} className="relative h-64 md:h-96">
              <Image
                src={`/path-to-artwork-${num}.jpg`}
                alt={`Artwork ${num}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg border"
              />
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-400 bg-opacity-75 p-2 text-xs">
                版權歸屬山水風景所有
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="py-16 bg-gray-100">
    //   <div className="container mx-auto px-4 text-center">
    //     <h2 className="text-5xl font-bold mb-2">3,055</h2>
    //     <p className="text-xl text-gray-600">瀏覽次數</p>
    //   </div>
    // </section>
  );
};

export default GoodPage;
