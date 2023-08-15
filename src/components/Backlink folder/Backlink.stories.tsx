// import type { ComponentMeta } from "@storybook/react";

import Backlink from "./Backlink";

export const WithDescription = () => {
  const backlink1 = {
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVh2ALrbWhU_kdcsEqP_ECUASOOANyYd8NAoDOllt3A&s",
    title: "Behold I am a banana",
    description: "As the title states, I am a banana",
    fullUrl: "https://google.com/s/photos/random",
  };

  return <Backlink backlink={backlink1} />;
};

export default {
  title: "Components/Backlink",
  component: Backlink,
} as ComponentMeta<typeof Backlink>;
