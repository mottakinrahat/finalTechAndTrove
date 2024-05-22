import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../../Title/Title";

const brands = [
  { name: "A4tech", brandImage: "https://i.ibb.co/4NMXRSn/A4tech.png" },
  { name: "Anker", brandImage: "https://i.ibb.co/zhrsYcc/Anker.png" },
  { name: "Apacer", brandImage: "https://i.ibb.co/Pt7JKDZ/Apacer.png" },
  { name: "Aula", brandImage: "https://i.ibb.co/QPMLCWw/Aula.png" },
  { name: "Awei", brandImage: "https://i.ibb.co/MMxRz1j/Awei.png" },
  { name: "Baseus", brandImage: "https://i.ibb.co/2yHcXNV/baseus.png" },
  { name: "Boya", brandImage: "https://i.ibb.co/KjSScpb/Boya.png" },
  { name: "Fantech", brandImage: "https://i.ibb.co/NsBz2PS/Fantech.png" },
  { name: "Fantech2", brandImage: "https://i.ibb.co/WBB2DLH/Fantech2.png" },
  { name: "Fifine", brandImage: "https://i.ibb.co/GHn4cm6/fifine.png" },
  { name: "Geeoo", brandImage: "https://i.ibb.co/xC7Z5bG/Geeoo.png" },
  { name: "Havit", brandImage: "https://i.ibb.co/mNMbqqd/Havit.png" },
  { name: "Hoco", brandImage: "https://i.ibb.co/PDsDZ01/Hoco.png" },
  { name: "Joyroom", brandImage: "https://i.ibb.co/mbBKjQv/Joyroom.png" },
  { name: "Ldnio", brandImage: "https://i.ibb.co/sm72dhp/Ldnio.png" },
  { name: "Lexar", brandImage: "https://i.ibb.co/kD30q5b/Lexar.png" },
  { name: "Logitech", brandImage: "https://i.ibb.co/5npnBZH/Logitech.png" },
  { name: "Moxx", brandImage: "https://i.ibb.co/vHDSY5g/Moxx.png" },
  { name: "QKZ", brandImage: "https://i.ibb.co/j6HZy7t/QKZ.png" },
  { name: "Remax", brandImage: "https://i.ibb.co/p3nSYzF/Remax.png" },
  { name: "Sandisk", brandImage: "https://i.ibb.co/bB979dq/Sandisk.png" },
  { name: "Udemy", brandImage: "https://i.ibb.co/KFDwS2g/udemy.png" },
  { name: "UDFINE", brandImage: "https://i.ibb.co/RNFBgb2/UDFINE.png" },
  { name: "Uiisii", brandImage: "https://i.ibb.co/2tLQsjw/uiisii.png" },
  { name: "USAMS", brandImage: "https://i.ibb.co/qyvzC0D/USAMS.png" },
  { name: "Wiwu", brandImage: "https://i.ibb.co/2WXxmY9/wiwu.png" },
  { name: "Xiaomi", brandImage: "https://i.ibb.co/gMwjvnq/Xiaomi.png" },
];
const BrandDisplay = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Title heading="Brands" upperText="we provide products"></Title>
      <Marquee pauseOnHover={true}>
        {brands.map((brand, index) => (
          <Image
            key={index + 1}
            src={brand?.brandImage}
            height={200}
            width={200}
            alt="logo"
          ></Image>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandDisplay;
