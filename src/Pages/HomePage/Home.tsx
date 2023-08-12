import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../assets/Images/google.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-blue-700">
      <img
        src={GoogleLogo}
        alt="Google Image"
        className="w-48 h-48 bg-white rounded-full shadow-md mb-8 border-4 border-white"
      />

      <button
        onClick={() => navigate("/add-tab")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md mb-2 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Tab
      </button>
      <button
      onClick={() => navigate("/faqs")}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring focus:ring-green-300">
        FAQs
      </button>
    </div>
  );
};

export default Home;
