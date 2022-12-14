import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "../config/supabase";

function Create() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigateTo = useNavigate();

  const [data, setData] = useState({
    name: "",
    author: "",
    rating: "",
    about: "",
  });

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.author || !data.about || !data.rating) {
      setError("Field can not be empty !");
      return;
    }

    const res = await supabase.from("Books").insert([data]);

    if (res.error) {
      setError(res.error.message + " !");

      // toast.error(`${res.error.message}! error`);
    }

    if (res.data) {
      setSuccess("Entry created. Redirecting to home.");
      setTimeout(() => {
        navigateTo("/");
      }, 3000);
    }
  };

  return (
    <>
      <section>
        {error && (
          <div className="absolute bottom-0 right-0 p-4 w-fit bg-black flex items-center justify-start gap-2">
            <div className="text-red-500">
              <AiFillInfoCircle />
            </div>
            <p className="text-[0.8rem] text-red-500">{error}</p>
          </div>
        )}

        {success && (
          <div className="absolute bottom-0 right-0 p-4 w-fit bg-black flex items-center justify-start gap-2">
            <div className="text-green-500">
              <AiFillInfoCircle />
            </div>
            <p className="text-[0.8rem] text-green-500">{success}</p>
          </div>
        )}

        <form className="max-w-md mx-auto space-y-4" onSubmit={handelSubmit}>
          <h1 className="font-semibold">Create an Entry</h1>
          <div className="space-y-2">
            <p>Name</p>
            <input
              value={data.name}
              onChange={handelChange}
              type="text"
              name="name"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <div className="space-y-2">
            <p>Author</p>
            <input
              value={data.author}
              onChange={handelChange}
              type="text"
              name="author"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <div className="space-y-2">
            <p>Rating</p>
            <input
              value={data.rating}
              onChange={handelChange}
              type="number"
              name="rating"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <div className="space-y-2">
            <p>About the book</p>
            <textarea
              rows="6"
              value={data.about}
              onChange={handelChange}
              name="about"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <input
            type="submit"
            value="Add record"
            className="block w-full p-3 rounded-sm text-sm bg-black outline-none cursor-pointer"
          />
        </form>
      </section>
    </>
  );
}

export default Create;
