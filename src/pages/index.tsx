import React from "react";

import { Template } from "../components/Template";

export default function Home({
  generations,
}) {
  return (
    <Template>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      </div>{" "}
    </Template>
  );
}

export const getStaticProps = async () => {
  // const generations: GenerationRaw[] = await getMusicGenOggData();
  return {
    props: {
      // generations: generations,
    },
  };
};
