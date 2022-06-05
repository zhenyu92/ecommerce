import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "vfxfwnaw",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  token:
    "skqX4kdZKQRvszcSCIm7xQgzfu7lab7cgdpdeVnHr3AZ1Bzhv40Mqf7lQWQis6Wh5rnb8NzWr6vyQ0enw9SJCCOeAkT18GCdE70DYw2YPhIF26U3TM02qPEoZm8zcy8vBhu3RAvZvTs2vYfGdO8lDGMszusMbsPdBKMYRN3WiXqfeeJqkvdK",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
