import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="flex-1 p-8 border-2 border-[#515151] rounded-md flex flex-col justify-between gap-4">
      <div className="space-y-1">
        <p className="font-bold text-3xl">{data.name}</p>
        <p>{data.author}</p>
        <p className="text-[#999999]">{data.rating}/5</p>
        <p className="text-[0.9rem] text-[#999999]">
          {data.about.slice(0, 140)}...
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Link
          className="rounded-md inline-block px-[1.3rem] py-[0.3rem] bg-[#2e2e2e] hover:bg-[#101010] duration-200"
          to={`/${data.name.trim().replaceAll(" ", "-")}`}
        >
          View
        </Link>

        <Link to={`/${data.name.trim().replaceAll(" ", "-")}/edit`}>Edit</Link>
      </div>
    </div>
  );
}

export default Card;
