import { Link } from "react-router-dom";
import supabase from "../config/supabase";

function Card({ info, onDelete }) {
  const handelDelete = async () => {
    const { data, error } = await supabase
      .from("Books")
      .delete()
      .eq("id", info.id);

    if (error) {
      alert("Something went wrong.");
    }

    if (data) {
      alert("Data deleted.");
      onDelete(info.id);
    }
  };

  return (
    <div className="flex-1 p-8  bg-[#1c1c1c] hover:bg-[#1d1d1d] flex flex-col justify-between gap-4">
      <div className="space-y-1">
        <p className="font-bold text-3xl">{info.name}</p>
        <p>{info.author}</p>
        <p className="text-[#999999]">{info.rating}/5</p>
        <p className="text-[0.9rem] text-[#999999]">
          {info.about.slice(0, 140)}...
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Link
          className="rounded-md inline-block px-[1.3rem] py-[0.3rem] bg-[#2e2e2e] hover:bg-[#101010] duration-200"
          to={`/${info.id}`}
        >
          View
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to={`/edit/${info.id}`}
            className="rounded-md inline-block px-[0.7rem] py-[0.3rem]  hover:bg-[#2e2e2e] duration-200"
          >
            Edit
          </Link>
          <p
            onClick={handelDelete}
            className="rounded-md inline-block px-[0.7rem] py-[0.3rem] bg-[#770505] hover:bg-[#4a0808] duration-200 font-semibold cursor-pointer text-[0.9rem]"
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
