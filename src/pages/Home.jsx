import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div>
      <h1>Benvenuto {username}</h1>
    </div>
  );
};
export default Home;
