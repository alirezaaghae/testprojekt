import { useEffect, useState } from "react";

const EpsgData = () => {
    const [epsgItems, setEpsgItems] = useState<[string, string][]>([]);

  useEffect(() => {
    fetch("/epsg.json")
      .then((res) => res.json())
      .then((data) => {
        setEpsgItems(data);
      })
      .catch((err) => {
        console.error("EPSG loading Error:", err);
        setEpsgItems([]);
      });
  }, []);

  return epsgItems
}

export default EpsgData