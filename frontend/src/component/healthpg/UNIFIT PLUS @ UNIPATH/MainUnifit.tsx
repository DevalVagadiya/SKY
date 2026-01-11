import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroUnifit from "./HeroUnifit";
import DetailUnifit from "./DetailUnifit";
import packagesData from "../../../static-data/packages.json";

const MainUnifit = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null as any);

  useEffect(() => {
    if (!id) return;

    const packageId = parseInt(id, 10);
    const selectedPackage = packagesData.find((p) => p.id === packageId);

    setPackageData(selectedPackage);
  }, [id]);

  if (!packageData) return <p className="text-center py-10">No Data Found</p>;

  return (
    <>
      <HeroUnifit pack={packageData} />
      <DetailUnifit pack={packageData} />
    </>
  );
};

export default MainUnifit;
