import type ImageUrls from "./ImageUrls.ts";

export default interface Demonstration {
  filename: string;
  piraId: string;
  name: string;
  category: string;
  subcategory: string;
  topic: string;
  images: ImageUrls;
  concept: string[];
  equipment: string[];
  procedure: string[];
}