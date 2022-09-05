import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabase";

function View() {
  let { slug } = useParams();
  const name = slug.replaceAll("-", " ");

  const [singleData, setSingleData] = useState([]);

  const dataFetching = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .eq("name", name)
      .single();

    if (error) {
    }

    if (data) {
      setSingleData(data);
    }
  };

  useEffect(() => {
    dataFetching();
  }, [slug]);

  console.log(singleData);

  return (
    <>
      <div className="h-[80vh] flex items-center">
        <div className="max-w-lg space-y-3">
          <h1 className="font-semibold text-3xl">{singleData.name}</h1>
          <p>{singleData.author}</p>
          <p className="text-[#999999]">{singleData.rating}/5</p>
          <p className="text-[0.9rem] text-[#999999]">{singleData.about}</p>
        </div>
      </div>
    </>
  );
}

export default View;