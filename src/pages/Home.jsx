import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import supabase from "../config/supabase";

function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [fetchData, setFetchData] = useState(null);

  const handelGlobalDelete = (id) => {
    setFetchData((prevData) => {
      return prevData.filter((d) => d.id !== id);
    });
  };

  const dataFetching = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .order("id", { ascending: false });

    if (error) {
      setErrorMsg("Could not fetch data !");
      setFetchData(null);
    }

    if (data) {
      setFetchData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <>
      <section className="min-h-[76vh]">
        {errorMsg && <h1 className="font-semibold text-3xl">{errorMsg}</h1>}

        {fetchData && fetchData.length > 0 ? (
          <div className="grid gap-4 mt-8 grid-cols-3">
            {fetchData.map((data) => (
              <Card info={data} key={data.id} onDelete={handelGlobalDelete} />
            ))}
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-6">
            <h1 className="font-semibold text-5xl">Loading ...</h1>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
