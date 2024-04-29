interface Props {
  text: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ text, color = "secondary", onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-` + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
