import "./Button.scss";

interface Props {
  width?: string | number;
  children: React.ReactNode;
  border?: string;
  padding: string;
  borderRadius: string;
  color?: string;
}

export const Button: React.FC<Props> = ({ width, children, padding, borderRadius, color }) => {
  const style = {
    width: `${width}`,
    padding: `${padding}`,
    borderRadius: `${borderRadius}`,
    color: `${color}`,
  };

  return (
    <button
      className="button"
      style={style}
      onClick={() => {
        console.log("we can send onclick function here");
      }}
    >
      {children}
    </button>
  );
};
