import { classes } from "./styles";

export const Body = (props: {
  gap?: "sm" | "lg";
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.children({ gap: props.gap })}>{props.children}</div>
  );
};
