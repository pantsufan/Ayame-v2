import Head from "next/head";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import Axios from "axios";
export default function Search({ upcoming }) {
  const [searchAnime, setSearchAnime] = useState("");
  const url = "https://api.jikan.moe/v3/search/anime?q=";

  const [anime, setAnime] = useState([]);

  const getAnime = async () => {
    let res = await Axios.get(url + searchAnime).then((response) => {
      setAnime(response.data.results);
    });
  };

  const updateAnime = (event) => {
    setSearchAnime(event.target.value);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-100">
        <h1 className="font-black text-4xl text-center text-blue-600 pt-5">
          Ayame V2
        </h1>
        <h1 className="font-black text-3xl text-center text-blue-500 p-5">
          Search
        </h1>
        <Nav />
        <div className="flex justify-center p-6">
          <input
            className="p-2 w-full rounded-md"
            type="text"
            placeholder="Find Anime"
            onChange={updateAnime}
          ></input>
          <button
            className="bg-blue-600 hover:bg-blue-700 p-3 text-center rounded-xl text-blue-50 ml-4"
            onClick={getAnime}
          >
            Search
          </button>
        </div>
        <div className="md:grid grid-cols-2 gap-2">
          {anime.map((value, key) => {
            return (
              <figure
                className="md:flex bg-blue-200 rounded-xl p-4 my-4 mx-5"
                key={key}
              >
                <img
                  className="w-48 h-auto md:w-60 md:h-auto mx-auto md:mx-0"
                  src={value.image_url}
                  alt={value.title}
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <figcaption className="font-medium">
                    <div className="text-xl text-cyan-600">
                      <b>{value.title}</b>
                    </div>
                    <div className="text-gray-500 flex-row md:flex">
                      <div className="grid grid-cols-2 gap-4 my-2 flex-row md:flex"></div>
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
