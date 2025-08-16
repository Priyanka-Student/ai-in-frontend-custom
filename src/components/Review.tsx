import MarkdownPreview from "@uiw/react-markdown-preview";

import Loader from "./Loader";

const Review = ({
  review,
  isGenerating,
}: {
  review: string;
  isGenerating: boolean;
}) => {
  console.log("Review component - isGenerating:", isGenerating, "review length:", review.length);
  
  return (
    <div className="h-full w-6/12 relative overflow-scroll">
      {isGenerating ? (
        <Loader />
      ) : review ? (
        <MarkdownPreview
          source={review}
          style={{ fontSize: "30px", minHeight: "100vh", padding: "20px" }}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400 text-xl">
          Enter some code and click "Generate Review" to get started
        </div>
      )}
    </div>
  );
};

export default Review;
