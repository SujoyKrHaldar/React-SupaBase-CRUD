import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabase";

function View() {
  let { id } = useParams();

  const [singleData, setSingleData] = useState([]);

  const dataFetching = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .eq("id", id)
      .single();

    if (error) {
    }

    if (data) {
      setSingleData(data);
    }
  };

  useEffect(() => {
    dataFetching();
  }, [id]);

  console.log(singleData);

  return (
    <>
      <div className="h-[80vh] flex items-center">
        <div className="max-w-lg space-y-3">
          <h1 className="font-semibold text-3xl">{singleData.name}</h1>
          <p>{singleData.author}</p>
          <p className="text-[#999999]">{singleData.rating}/5</p>
          <p className="text-[0.9rem] text-[#999999]">{singleData.about}</p>
          <Link
            className="rounded-md inline-block px-[1.3rem] py-[0.3rem] bg-[#2e2e2e] hover:bg-[#101010] duration-200"
            to={`/edit/${id}`}
          >
            Update data
          </Link>
        </div>
      </div>
    </>
  );
}

export default View;
