type props = {
  color: string;
  text: string;
};

export default function Content(props: props) {
  return <p style={{ color: props.color }}>{props.text}</p>;
}
