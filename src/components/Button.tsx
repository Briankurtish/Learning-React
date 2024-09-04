interface Props {
  title: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ title, onClick, color = "success" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
