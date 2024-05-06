// import React from "react";
// import QuickMessage from "./QuickMessage";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, INLINES } from "@contentful/rich-text-types";

// const renderOptions = {
//   renderNode: {
//     [INLINES.EMBEDDED_ENTRY]: (node, children) => {
//       if (node.data.target.sys.contentType.sys.id === "blogPost") {
//         return (
//           <a href={`/blog/${node.data.target.fields.slug}`}>
//             {node.data.target.fields.title}
//           </a>
//         );
//       }
//     },
//     [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
//       if (node.data.target.sys.contentType.sys.id === "codeBlock") {
//         return (
//           <pre>
//             <code>{node.data.target.fields.code}</code>
//           </pre>
//         );
//       }

//       if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
//         return (
//           <iframe
//             src={node.data.target.fields.embedUrl}
//             height="100%"
//             width="100%"
//             frameBorder="0"
//             scrolling="no"
//             title={node.data.target.fields.title}
//             allowFullScreen={true}
//           />
//         );
//       }
//     },

//     [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
//       return (
//         <img
//           src={`https:${node.data.target.fields.file.url}`}
//           height={node.data.target.fields.file.details.image.height}
//           width={node.data.target.fields.file.details.image.width}
//           alt={node.data.target.fields.description}
//         />
//       );
//     },
//   },
// };

// function DetailsQuickMessage({
//   heading,
//   author,
//   date,
//   url,
//   description,
//   body,
// }) {
//   return (
//     <div>
//       <div className="container">
//         <h2>{heading}</h2>
//         <div className="meta" style={{ display: "flex", gap: "10px" }}>
//           <p>By: {author}</p>
//           <p>On: {date}</p>
//         </div>
//         <img
//           src={url}
//           alt={description}
//           style={{ maxHeight: "500px", maxWidth: "800px" }}
//         />
//         {post.fields && post.fields.body ? (
//           documentToReactComponents(body, renderOptions)
//         ) : (
//           <p>Loading content...</p>
//         )}
//       </div>
//       <QuickMessage inquiry="Send us a quick message" />
//     </div>
//   );
// }

// export default DetailsQuickMessage;
