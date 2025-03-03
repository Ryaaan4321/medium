import { BlogSkelton } from "../components/BlogSkelton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
interface Blog {
  "content": string,
  "title": string,
  "id": number,
  "author": {
    "name": string
  }
  "published": boolean
}
// drafts js to make rich editor
export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  console.log("blog from the Blog Page = ", blog)
  if (loading) return (
    <div>
      <BlogSkelton />
      <BlogSkelton />
    </div>
  );
  return (
    <div>
      <FullBlog blog={blog!} />
    </div>
  );
};
// drafts js to make rich editor