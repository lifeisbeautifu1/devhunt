import { IPost } from '../interfaces';
import { Link } from 'react-router-dom';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Link
          to="/"
          className={`${
            post.type === 'Article'
              ? 'bg-indigo-100 text-indigo-700'
              : post.type === 'Video'
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          } p-1 px-3 text-sm font-[500] rounded-[30px]`}
        >
          {post.type}
        </Link>
        <h1 className="text-lg font-semibold">{post.title}</h1>
      </div>
      <p className="text-gray-500">
        {post.description}
        <Link className="text-red-700 text-sm font-[500]" to="/">
          {' '}
          [ read more ]
        </Link>
      </p>
      <div className="flex gap-4 text-sm">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <Link to="/">
            <img
              className="w-full h-full object-cover"
              src={post.authorPicture}
              alt={post.author}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-[500]">{post.author}</h1>
          <p className="text-gray-500">
            {post.date} {post.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
