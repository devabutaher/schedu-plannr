import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SinglePost = () => {
  const params = useParams();
  const id = params.id;

  const { data: blogs = [id], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(
        `https://scheduplannr-server.vercel.app/blogPost/${id}`
      );
      const data = await res.json();
      console.log(blogs);
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4 w-full">
            <div className="hover:opacity-75 flex justify-center">
              <img src={blogs?.image} alt="" />
            </div>
            <div className="flex flex-col justify-start p-6">
              <p className="text-blue-700 text-sm font-bold uppercase pb-4">
                {blogs?.category}
              </p>
              <p className="text-3xl font-bold hover:text-primary pb-4">
                {blogs?.title}
              </p>
              <p className="text-sm pb-8">
                By{" "}
                <span className="font-semibold hover:text-primary">
                  {blogs?.name}
                </span>
                , Published on {blogs?.postDate}
              </p>

              <p className="pb-3">{blogs?.description}</p>
            </div>
          </article>

          <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow mt-10 mb-10 p-6">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
              <img
                src={blogs?.photoURL}
                className="rounded-full shadow h-32 w-32"
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col justify-center md:justify-start">
              <p className="font-semibold text-2xl">{blogs?.name}</p>
              <p className="pt-2">{blogs?.about}</p>
            </div>
          </div>
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              In the hare and the tortoise fable we like to think of ourselves
              as the tortoise. Not in the sense of being slow, but in the sense
              of being consistent in the pursuit of our long-term goals. Here
              are some of the key traits that make us a good tortoise…
            </p>
            <a
              href="/about"
              className="w-full bg-primary text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                alt=""
              />
            </div>
            <a
              href="/"
              className="w-full bg-primary text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i className="fab fa-instagram mr-2"></i> Follow ScheduPlannr
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SinglePost;
