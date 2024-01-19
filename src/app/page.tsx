"use client";
import React from "react";
import Image from "next/image";
import Map from "./component/map";
import EtaTime from "./component/eta";
import BottomSheet from "./component/BottomSheet";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
interface IOffer {
  ID: number;
  Origin: string;
  Destination: string;
  OriginAreaId: number;
  DestinationAreaId: number;
  Rate: number;
  Eta: number;
  Price: number;
}
export default function Home() {
  const searchParams = useSearchParams();
  const  id  = searchParams.get("id");
  const [data, setData] = useState<IOffer[]>();
  const [activeOffer, setActiveOffer] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://188.121.117.228:8083/offer/list?driverId=${id}`
      );
      const data = await response.json();
      setData(data.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      {data && (
        <div>
          <Map
            OriginAreaId={data[activeOffer].OriginAreaId}
            DestinationAreaId={data[activeOffer].DestinationAreaId}
          />
          <EtaTime time={data[activeOffer].Eta} />
          <BottomSheet
            data={data}
            set={setActiveOffer}
            activeOffer={activeOffer}
          />
        </div>
      )}
    </div>
  );
}
