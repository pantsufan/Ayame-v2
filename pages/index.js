import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";
export default function Home({ upcoming }) {
  return (
    <div>
      <Head>
        <title>Ayame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-100 ">
        <h1 className="font-black text-6xl text-center text-blue-600 pt-5">
          Ayame V2
        </h1>
        <h1 className="font-black text-2xl text-center text-blue-500 p-5">
          Top Anime Of All Time
        </h1>
        <Nav />
        <div className="md:grid grid-cols-2 gap-2">
          {upcoming.top.map((value, key) => {
            return (
              <figure
                className="md:flex bg-blue-200 rounded-xl p-4 my-4 mx-5"
                key={key}
              >
                <img
                  className="w-48 h-auto md:w-60 md:h-auto mx-auto md:mx-0 rounded-md"
                  src={value.image_url}
                  alt={value.title}
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <figcaption className="font-medium">
                    <div className="text-xl text-cyan-600 hover:text-blue-700 cursor-pointer">
                      <Link href={value.url}>
                        <b>{value.title}</b>
                      </Link>
                    </div>
                  </figcaption>
                  <blockquote>
                    <p className="font-semibold">{value.type}</p>
                    <p className="font-semibold">Episodes: {value.episodes}</p>
                    <p className="font-semibold">{value.start_date}</p>
                  </blockquote>
                </div>
              </figure>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.jikan.moe/v3/top/anime/1/favorite`);
  const upcoming = await res.json();

  return {
    props: {
      upcoming,
    },
  };
};
