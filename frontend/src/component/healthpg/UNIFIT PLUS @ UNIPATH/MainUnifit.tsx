import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeroUnifit from "./HeroUnifit";
import DetailUnifit from "./DetailUnifit";

const MainUnifit = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://sky-backend-7kjf.onrender.com/api/packages/${id}/`)
      .then((res) => {
        setPackageData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching package:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!packageData) return <p className="text-center py-10">No Data Found</p>;

  return (
    <>
      <HeroUnifit pack={packageData} />
      <DetailUnifit pack={packageData} />
    </>
  );
};

export default MainUnifit;
