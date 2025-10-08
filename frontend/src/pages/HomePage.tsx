import Header from '../components/home/Header';
import InputPanel from '../components/home/InputPanel';
const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <main>
        <InputPanel/>
      </main>
    </div>
  );
};

export default Homepage;