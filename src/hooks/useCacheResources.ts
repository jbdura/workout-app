import { useState, useEffect } from "react";
import * as Font from 'expo-font';

export default function useCacheResources() {
  const [ isLoadingComplete, setIsLoadingComplete ] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {

      try {
        await  Font.loadAsync({
          "montserrat": require("../../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
        })
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoadingComplete(true)
      }


    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
