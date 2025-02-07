// "use client";

// import { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
// import { Button } from "../../ui/button";
// import { Loader2, AlertCircle } from "lucide-react";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// export default function FetchPostsPage() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const response = await fetch("/api/external");
//         if (!response.ok) {
//           throw new Error("Failed to load posts");
//         }
//         const data: Post[] = await response.json();
//         setPosts(data.slice(0, 10)); // Limit to 10 posts
//       } catch (error) {
//         setError((error as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPosts();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">📜 Latest Posts</h1>

//       {loading && (
//         <div className="flex justify-center items-center">
//           <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
//           <span className="ml-2 text-gray-500">Loading posts...</span>
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-100 text-red-700 p-4 rounded-lg flex items-center">
//           <AlertCircle className="w-5 h-5 mr-2" />
//           <span>{error}</span>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {posts.map((post) => (
//           <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
//             <CardHeader>
//               <CardTitle className="text-lg">{post.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-600">{post.body}</p>
//               <Button variant="outline" className="mt-4 w-full">
//                 Read More
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Loader2, AlertCircle } from "lucide-react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function FetchPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/external");
        if (!response.ok) {
          throw new Error("Failed to load posts");
        }
        const data: Post[] = await response.json();
        setPosts(data.slice(0, 10)); // Limit to 10 posts
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">📜 Latest Posts</h1>

      {loading && (
        <div className="flex justify-center items-center space-x-2 text-gray-500">
          <Loader2 className="animate-spin w-6 h-6" />
          <span>Loading posts...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg flex items-center justify-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.body}</p>
              <Button variant="outline" className="mt-4 w-full">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
