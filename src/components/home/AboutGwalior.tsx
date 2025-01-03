
import gwaliorImage from "../../assets/Gwalior_Fort.jpg"; 

const AboutGwalior = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4 px-4">
      <h1 className="text-4xl font-bold mb-2">About Gwalior</h1>
      <div className="max-w-4xl space-y-6  backdrop-blur-sm shadow-lg rounded-xl p-8">
        <div>
          <p className="text-purple-800 text-lg font-semibold">
            Nestled in the heart of India, Gwalior stands as a vibrant city rich
            in history, culture, and architectural marvels. Known for its
            majestic Gwalior Fort, adorned with intricate carvings and
            overlooking the city, Gwalior offers a captivating journey through
            time. As visitors explore the city's palaces, temples, and museums,
            they are transported to eras of valor and grandeur. Moreover, with
            Agra, home to the iconic Taj Mahal, situated within close proximity
            (around 110 KM), Gwalior serves as an ideal base for travelers
            seeking to immerse themselves in the splendor of Mughal
            architecture. Whether marveling at the beauty of the Taj Mahal or
            delving into Gwalior's own rich heritage, visitors are treated to an
            unforgettable experience, where history comes alive amidst the
            timeless allure of these two remarkable cities.
          </p>
        </div>
        <div className="hover:scale-105 transition-all duration-300">
          <img src={gwaliorImage} alt="Gwalior Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutGwalior;
