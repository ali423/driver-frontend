"use client";
import React from "react";
import Image from "next/image";
import Map from "./component/map";
import Eta from "./component/eta";
import BottomSheet from "./component/BottomSheet";
import { useEffect, useState } from "react";
const test = {
  ID: 2,
  Origin: "منطقه شماره 1 ",
  Destination: "منطقه شماره 8 ",
  OriginAreaId: 1,
  DestinationAreaId: 8,
  Rate: 5,
  Eta: 46,
  Price: 18224,
};
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
  const [data, setData] = useState<IOffer[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://188.121.117.228:8083/offer/list?driverId=6"
      );
      const data = await response.json();
      setData(data.data);
    };

    fetchData();
  }, []);
  return (
    <div className="hihi">
      {data?.map(({ ID, OriginAreaId, DestinationAreaId }) => {
        return (
          <div key={ID}>
            {" "}
            {ID}
            <Map
              OriginAreaId={OriginAreaId}
              DestinationAreaId={DestinationAreaId}
            />
            <Eta />
            <BottomSheet />
          </div>
        );
      })}
    </div>
  );
}
