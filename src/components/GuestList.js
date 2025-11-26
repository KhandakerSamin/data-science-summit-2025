import React from "react";
import Image from "next/image";

// Guest data
const guests = [
    {
        name: "Dr. Md. Sabur Khan",
        img: "/guests/sabur-khan.png",
        designation: "Honorable Chairman Board of Trustees",
        organization: "Daffodil International University",
        category: "chairman",
    },
    {
        name: "Professor Dr. M. R. Kabir",
        img: "/guests/vc.png",
        designation: "Vice Chancellor",
        organization: "Daffodil International University",
        category: "chief",
    },
    {
        name: "Professor Mohammed Masum Iqbal, PhD",
        img: "/guests/pro-vc.png",
        designation: "Pro Vice Chancellor",
        organization: "Daffodil International University",
        category: "chief",
    },
    // {
    //     name: "Professor Dr. Syed Akhter Hossain",
    //     img: "/guests/dean.jpg",
    //     designation: "Dean and Professor of FSIT",
    //     organization: "Daffodil International University",
    //     category: "special",
    // },
    {
        name: "Dr. Imran Mahmud",
        img: "/guests/head.png",
        designation: "Head of Software Engineering Department",
        organization: "Daffodil International University",
        category: "special",
    },
    // {
    //     name: "Dr. Mohammad NuruzZaman",
    //     img: "/guests/ceosir.jpg",
    //     designation: "Group CEO",
    //     organization: "Daffodil Family",
    //     category: "special",
    // }
];

const GuestCard = ({ guest }) => {
    const { name, img, designation, organization } = guest;

    return (
        <div className="h-94 w-80 rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4 flex justify-center">
                <Image
                    src={img}
                    width={330}
                    height={350}
                    alt={name}
                    className="object-fit h-64 w-64 rounded-sm"
                />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600">{designation}</p>
                <p className="text-sm italic text-gray-500">{organization}</p>
            </div>
        </div>
    );
};

const GuestList = () => {
    const chairman = guests.filter((guest) => guest.category === "chairman");
    const chiefGuests = guests.filter((guest) => guest.category === "chief");
    const specialGuests = guests.filter((guest) => guest.category === "special");
    // const regularGuests = guests.filter((guest) => guest.category === "guest");

    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-4">
            <div className="inline-block mb-6">
                <div className="relative">
                    <div className="absolute -inset-2 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-lg blur-xl opacity-30"></div>
                    <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                        Guests
                    </h2>
                </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold">Honour of Guest</h2>
            <div className="mb-3 flex justify-center gap-4">
                {chairman.map((guest) => (
                    <GuestCard key={guest.name} guest={guest} />
                ))}
            </div>
            <h2 className="mb-4 text-2xl font-bold">Chief Guest</h2>
            <div className="flex flex-wrap gap-4">
                {chiefGuests.map((guest) => (
                    <GuestCard key={guest.name} guest={guest} />
                ))}
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold">Special Guests</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {specialGuests.map((guest) => (
                    <GuestCard key={guest.name} guest={guest} />
                ))}
            </div>

            {/* <h2 className="mb-4 mt-8 text-2xl font-bold">Guests</h2>
      <div className="flex flex-wrap gap-4">
        {regularGuests.map((guest) => (
          <GuestCard key={guest.name} guest={guest} />
        ))}
      </div> */}
        </div>
    );
};

export default GuestList;
