export const H2 = (props: { text: string }) => {
  return (
    <h2 className="text-4xl font-bold text-secondary-100 pb-3">{props.text}</h2>
  );
};

export const H3 = (props: { text: string }) => {
  return (
    <h2 className="text-2xl font-bold text-secondary-100 pb-3">{props.text}</h2>
  );
};
