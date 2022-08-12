import { Post } from './';
import posts from '../posts';



const Posts = () => {
  return (
    <div className="px-8 lg:px-28 my-20 flex flex-col items-center md:items-stretch gap-12">
      <div className="py-10 border-b border-gray-300">
        <h1 className="text-4xl font-[800]">Recent Posts</h1>
        <p className="text-gray-500 text-xl mt-4">
          Looking for something interestin to read? Check out these recent
          posts.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-4">
        {posts.map((p, index) => (
          <Post key={index} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
