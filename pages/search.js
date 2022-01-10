import Head from "next/head";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import Axios from "axios";
import Link from "next/link";
export default function Search({ upcoming }) {
  const [searchAnime, setSearchAnime] = useState("");
  const url = "https://api.jikan.moe/v3/search/anime?q=";

  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnime = async () => {
    let res = await Axios.get(url + searchAnime).then((response) => {
      setAnime(response.data.results);
      setLoading(false);
    });
  };

  const updateAnime = (event) => {
    setSearchAnime(event.target.value);
  };

  return (
    <div>
      <Head>
        <title>Search Anime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-100 min-h-screen">
        <h1 className="font-black text-6xl text-center text-blue-600 pt-5">
          Ayame V2
        </h1>
        <h1 className="font-black text-2xl text-center text-blue-500 p-5">
          Search For Your Favourite Anime
        </h1>
        <Nav />
        <div className="flex justify-center p-6">
          <input
            className="p-3 w-full rounded-xl bg-blue-200 text-blue-800 border-solid border-4 border-blue-500"
            type="text"
            placeholder="Find Anime"
            onChange={updateAnime}
          ></input>
          <button
            className="w-48 bg-blue-900 hover:bg-blue-700 p-3 text-center rounded-xl text-blue-50 ml-4 font-semibold border-solid border-4 border-blue-400"
            onClick={getAnime}
          >
            Search
          </button>
        </div>
        {loading ? (
          <h3 className="font-black text-2xl text-center text-blue-400 p-6">
            Start Looking For Your Favouirte Anime
          </h3>
        ) : (
          <div className="md:grid grid-cols-2 gap-2">
            {anime.map((value, key) => {
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
                      <p className="font-semibold">
                        Episodes: {value.episodes}
                      </p>
                      <p className="font-semibold">{value.start_date}</p>
                    </blockquote>
                  </div>
                </figure>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
