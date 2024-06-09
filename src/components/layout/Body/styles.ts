import { tv } from "tailwind-variants";

export const classes = {
  children: tv({
    base: "grid  w-full px-6 md:px-80 py-6",
    variants: {
      gap: {
        sm: "gap-4",
        lg: "gap-6",
      },
    },
  }),
};
