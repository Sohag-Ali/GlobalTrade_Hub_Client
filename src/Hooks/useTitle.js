import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `GlobalTradeHub | ${title}`;
  }, [title]);
};

export default useTitle;
