type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit"
  onClick?: () => void
  variant?: "primary" | "danger"
}

export const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const styles =
    variant === "danger"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-blue-600 hover:bg-blue-700"

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full py-2 rounded-lg font-semibold
        text-white transition
        ${styles}
      `}
    >
      {children}
    </button>
  )
}
