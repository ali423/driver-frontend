import Image from "next/image";
import Map from "./component/map";
import Eta from "./component/eta";
import BottomSheet from "./component/BottomSheet";

export default function Home() {
  return (
    <div>
      <Map />
      <Eta />
      <BottomSheet />
    </div>
  );
}

