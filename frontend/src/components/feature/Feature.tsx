import React from "react";
import Image from "next/image";

interface Props {
  featureItem: {
    title: string;
    text: string;
    icon: string;
  };
  className?: string;
}

export default function Feature({ featureItem, className }: Props) {
  return (
    <div className={`text-center p-10 ${className}`}>
      <div className="w-[152px] h-[152px] rounded-full p-4 border-[10px] border-primary m-auto">
        <Image src={featureItem.icon} alt="icone" width={600} height={600} className="object-cover"/>
      </div>
      <h3 className="text-xl font-bold mt-5 mb-3">{featureItem.title}</h3>
      <p>{featureItem.text}</p>
    </div>
  );
}
