import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabase";

function View() {
  let { id } = useParams();
  const navigateTo = useNavigate();

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

  const handelDelete = async () => {
    const { data, error } = await supabase.from("Books").delete().eq("id", id);

    if (error) {
      alert("Something went wrong.");
    }

    if (data) {
      alert("Data deleted.");
      navigateTo("/");
    }
  };

  return (
    <>
      <div className="h-[80vh] flex items-center">
        <div className=" max-w-xl space-y-3">
          <h1 className="font-semibold text-5xl">{singleData.name}</h1>
          <p>{singleData.author}</p>
          <p className="text-[#999999]">{singleData.rating}/5</p>
          <p className="text-[0.9rem] text-[#999999]">{singleData.about}</p>
          <div className="flex gap-3 pt-3">
            <Link
              className="rounded-md inline-block px-[1.3rem] py-[0.3rem] bg-[#2e2e2e] 
              hover:bg-[#101010] duration-200"
              to={`/edit/${id}`}
            >
              Update data
            </Link>

            <p
              onClick={handelDelete}
              className="cursur rounded-md inline-block px-[1.3rem] py-[0.3rem] bg-[#770505]
             hover:bg-[#4a0808] duration-200 cursor-pointer"
            >
              Delete
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
