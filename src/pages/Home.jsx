import HomeComponent from "../components/home/HomeComponent";
import transition from "../utils/transition";

const Home = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default transition(Home);
// export default Home;
