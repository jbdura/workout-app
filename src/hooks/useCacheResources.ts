import { useState, useEffect } from "react";

export default function useCacheResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  
  useEffect(() => {
    function loadResourcesAndDataAsync() {
      setTimeout(() => {
        setIsLoadingComplete(true) 
      }, 3000)
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
