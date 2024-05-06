import React, { useEffect, useState } from "react";
import CustomeNavBar from "./CustomeNavBar";
import Breadcrumb from "./Breadcrumb";
import QuickMessage from "./QuickMessage";
import Footer from "./Footer";
import NavContact from "./NavContact";
import DetailsQuickMessage from "./DetailsQuickMessage";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";

function ReadMoreDetails() {
  const postId = useParams();
  const [post, setPost] = useState(null);
  console.log({ post });

  useEffect(() => {
    const client = createClient({
      space: "vj4sbs6zarkd",
      accessToken: "DPZRVwZ54Jm7bhtAL9G4EIybYeqg9gH2lIZzmqAtI0w",
    });

    const fetchPost = async () => {
      try {
        const response = await client.getEntry(postId);
        setPost(response);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!postId) {
    return <div>Loading...</div>; // or any other handling for undefined post
  }
  return (
    <div>
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb Ptitle="Personal Care" />
      <DetailsQuickMessage
        heading={post.fields.title}
        author={post.fields.author}
        date={post.fields.date}
        url={post.fields.image.fields.file.url}
        description={post.fields.image.fields.description}
        body={post.fields.body}
      />
      {/* <QuickMessage inquiry="Send us a quick message" /> */}
      <Footer />
    </div>
  );
}

export default ReadMoreDetails;
