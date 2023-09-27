import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <section>
        <h1>Hello!</h1>
        <p>This is a Next.js application. 😎</p>
      </section>
      <h2 className="text-red-600">Test new text</h2>
    </main>
  );
};

export default Home;
