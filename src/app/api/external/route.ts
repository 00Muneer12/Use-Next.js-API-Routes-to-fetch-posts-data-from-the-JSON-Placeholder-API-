// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const posts = await response.json();
//     return NextResponse.json(posts);
//   } catch (error) {
//     return NextResponse.json({ error: "Error fetching posts" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 }, // Caches the response for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const posts = await response.json();

    return NextResponse.json(posts, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Error fetching posts, please try again later." },
      { status: 500 }
    );
  }
}

