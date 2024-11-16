import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchAllPosts = async ({ pageParam }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=4&_page=${pageParam}`
  );
};

const InfiniteScroll = () => {
  const response = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < 25) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  const { isLoading, isError, data, error } = response;

  const posts = response.data?.pages?.[0].data;
  if (isError) {
    return <p className="text-xl text-red-800 font-bold">{error.message}</p>;
  }

  if (isLoading) {
    return (
      <p className="text-3xl font-extralight text-lime-700">Loading ...</p>
    );
  }
  return (
    <div className=" flex flex-col gap-4">
      {posts &&
        posts.map((post) => (
          <div className="border bg-sky-300 flex flex-col justify-center items-center p-2 py-3 rounded-md gap-4 shadow-sm">
            {" "}
            <strong className="text-xl font-bold text-blue-700">
              {post?.title}
            </strong>
            <p>{post?.body}</p>
          </div>
        ))}
    </div>
  );
};

export default InfiniteScroll;
