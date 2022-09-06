import { useEffect, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabase";

function Update() {
  let { id } = useParams();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [about, setAbout] = useState("");
  const [rating, setRating] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!name || !author || !about || !rating) {
      setError("Field can not be empty !");
      return;
    }

    const { data, error } = await supabase
      .from("Books")
      .update({ name, author, about, rating })
      .eq("id", id);

    if (error) {
      setError(res.error.message + " !");
    }

    if (data) {
      setSuccess("Entry updated. Going back.");
      setTimeout(() => {
        navigateTo(`/`);
      }, 2000);
    }
  };

  const dataFetching = async () => {
    const { data, error } = await supabase
      .from("Books")
      .select()
      .eq("id", id)
      .single();

    if (error) {
    }

    if (data) {
      setName(data.name);
      setAuthor(data.author);
      setAbout(data.about);
      setRating(data.rating);
    }
  };

  useEffect(() => {
    dataFetching();
  }, [id]);

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
          <h1 className="font-semibold">Update an Entry</h1>
          <div className="space-y-2">
            <p>Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <div className="space-y-2">
            <p>Author</p>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              name="author"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <div className="space-y-2">
            <p>Rating</p>
            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number"
              name="rating"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <div className="space-y-2">
            <p>About the book</p>
            <textarea
              rows="6"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              name="about"
              className="w-full px-3 py-3 bg-transparent border-2 border-[#5c5c5c] text-sm outline-none focus:border-white duration-200"
            />
          </div>

          <input
            type="submit"
            value="Update"
            className="block w-full p-3 rounded-sm text-sm bg-black outline-none cursor-pointer"
          />
        </form>
      </section>
    </>
  );
}

export default Update;
