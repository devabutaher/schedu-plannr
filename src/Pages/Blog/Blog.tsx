import axios from "axios";
import { useQuery } from "react-query";
import useTitle from "../../hooks/useTitle/useTitle";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data, isLoading, refetch } = useQuery("blogs", () =>
    axios(`https://scheduplannr-server.vercel.app/blogs`)
  );
  console.log(data);
  useTitle("Blog");

  return (
    <div>
      <div className="py-12">
        <div className="xl:container m-auto px-6 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold md:text-6xl" data-aos="fade-up"
     data-aos-duration="2000">
              Sharing is <span className="text-primary">Caring</span>
            </h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-60" data-aos="fade-up"
     data-aos-duration="3000">
              Sharing is the joint use of a resource or space. It is also the
              process of dividing and distributing. In its narrow sense, it
              refers to joint or alternating use of inherently finite goods,
              such as a common pasture or a shared residence.
            </p>
          </div>
          {isLoading && (
            <div className="flex justify-center items-center">
              {/* <Loading /> */}
              <img
                src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif"
                alt=""
              />
            </div>
          )}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" >
            {data?.data?.map((allBlogs: any) => (
              <BlogCard
                allBlogs={allBlogs}
                refetch={refetch}
                key={allBlogs._id}
              ></BlogCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
