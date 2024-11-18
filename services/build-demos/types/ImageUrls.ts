import {z} from "zod";
const imageUrls = z
  .array(z.string().url())
  .min(2)
  .max(4);

type ImageUrls = z.infer<typeof imageUrls>;
export default ImageUrls;