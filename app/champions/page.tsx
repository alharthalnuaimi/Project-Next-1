"use client";
import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

export default function Champions() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-[1000px] h-[600px] bg-cover bg-center bg-[url('https://preview.redd.it/high-noon-yone-splash-art-v0-5g9iprp6ikmc1.jpeg?auto=webp&s=4440dfbbd5e0c6e78337d7d4b3c2c50862a39fe8')]"></div>

      <div className="pt-[50px] pl-[100px] pr-[100px]">
        <Accordion variant="splitted">
          <AccordionItem
            className="w-[800px] "
            key="1"
            aria-label="AATROX"
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.22.1/CHAMPION/266/ICON"
              />
            }
            subtitle="THE DARKIN BLADE"
            title="AATROX"
          ></AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Accordion 2"
          ></AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Accordion 3"
          ></AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
