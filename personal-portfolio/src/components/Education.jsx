import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col primary mx-8 lg:gap-14 gap-8 lg:mx-52 pt-12 border-t-[1px]">
      {/* Education Title */}
      <h1 className="title">Education</h1>
      {/* ESTIN */}
      <div className="flex flex-col lg:border-l-[5px] border-l-[3px] border-[#3cd092] pl-4 gap-3">
        <div className="flex flex-row gap-2">
          <img
            className="w-12 h-12 lg:h-24 lg:w-24 place-self-center lg:object-cover"
            src="https://scontent.faae2-2.fna.fbcdn.net/v/t39.30808-6/292768697_448527287282584_3195192579326739384_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wv6aWG0cQKcQ7kNvgGxtmLA&_nc_ht=scontent.faae2-2.fna&_nc_gid=A9GFD40ZJTLtQDaWUCIR9iT&oh=00_AYCXT2-OB0dzx1PQ-vAAKdncm3GJxok9ZlJpkfpbJShEcg&oe=670E35A7"
          />
          <h1 className="lg:text-xl place-self-center text-white">
            Engineering School of Computer Science & Digital Technology - Béjaïa
            <span className="font-bold"> (2021-2026)</span>
          </h1>
        </div>
        <p className="lg:text-xl">
          Currently studying for a master's degree in computer science and
          software engineering
        </p>
      </div>
      {/* L'annex */}
      <div className="flex flex-col lg:border-l-[5px] border-l-[3px] border-[#3cd092] pl-4 gap-3">
        <div className="flex flex-row gap-2">
          <img
            className="w-12 h-12 lg:h-24 lg:w-24 place-self-center lg:object-cover"
            src="https://scontent.faae2-1.fna.fbcdn.net/v/t39.30808-6/284919477_1286004525141392_6132325503355838062_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uNoD3YFms8MQ7kNvgHSExIJ&_nc_ht=scontent.faae2-1.fna&_nc_gid=AUTZ50nlCsUEeIJiozr6bnp&oh=00_AYC2UYzxfXBUfm6rCrbv9PLHZeWUXvdW_Sa7Z5Vr4CmMUw&oe=670E4812"
          />
          <h1 className="lg:text-xl place-self-center text-white">
            Oussama Ibn Zaid Highschool - Skikda
            <span className="font-bold"> (2018-2021)</span>
          </h1>
        </div>
        <p className="lg:text-xl">
          Studied for three years and achieved a bachelor degree with a good
          grade 16/20
        </p>
      </div>
    </div>
  );
};

export default Education;
