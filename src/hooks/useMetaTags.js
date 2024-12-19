import { useEffect } from "react";

const useMetaTags = ({ title, description, keywords }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const updateMetaTag = (name, content) => {
      if (!content) return;

      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keyword", keywords);
  }, [title, description, keywords]);
};

export default useMetaTags;
