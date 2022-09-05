import { useEffect, useState } from "react";
import Card from "../components/Card";
import supabase from "../config/supabase";

function Home() {
  const [fetchMessage, setFetchMessage] = useState(null);
  const [fetchData, setFetchData] = useState(null);

  const dataFetching = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .order("id", { ascending: false });

    if (error) {
      setFetchMessage("Could not fetch data !");
      setFetchData(null);
    }

    if (data) {
      setFetchMessage("All Books");
      setFetchData(data);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <>
      <section>
        {fetchMessage && (
          <h1 className="font-semibold text-3xl">{fetchMessage}</h1>
        )}
        {fetchData && (
          <div className="grid gap-4 mt-8 grid-cols-3">
            {fetchData.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
