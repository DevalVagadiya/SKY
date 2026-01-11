import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroBtCbc from "./HeroBtCbc";
import DetailBTCbc from "./DetailBTCbc";
import testsData from "../../../static-data/tests.json";

const MainCbc = () => {
  const { id } = useParams(); // ✅ get dynamic ID
  const [test, setTest] = useState<typeof testsData[0] | null>(null);

  useEffect(() => {
    if (!id) return;

    const testId = parseInt(id, 10);
    const selectedTest = testsData.find((t) => t.id === testId);
    
    setTest(selectedTest ?? null);
  }, [id]);

  if (!test) return <p className="text-center py-10">No Data Found</p>;

  return (
    <>
      <HeroBtCbc test={test} />
      <DetailBTCbc test={test} />
    </>
  );
};

export default MainCbc;
