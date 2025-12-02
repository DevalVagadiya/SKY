import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeroBtCbc from "./HeroBtCbc";
import DetailBTCbc from "./DetailBTCbc";

const MainCbc = () => {
  const { id } = useParams(); // ✅ get dynamic ID
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://sky-backend-7kjf.onrender.com/api/tests/${id}/`)  // ✅ dynamic URL
      .then((res) => {
        setTest(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching test:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!test) return <p className="text-center py-10">No Data Found</p>;

  return (
    <>
      <HeroBtCbc test={test} />
      <DetailBTCbc test={test} />
    </>
  );
};

export default MainCbc;
