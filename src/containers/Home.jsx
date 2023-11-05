import { Pic, Title, Social, Link } from "@components";

const Home = () => {
  return (
    <section className="flex flex-col text-center items-center justify-center pt-24 gap-4 p-4">
      <Pic />
      <Title />
      <Social />
      <Link />
    </section>
  );
};

export default Home;
