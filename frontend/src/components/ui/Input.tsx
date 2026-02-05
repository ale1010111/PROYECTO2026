type InputProps = {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="space-y-1">
      <label className="text-sm text-slate-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="
          w-full px-4 py-2 rounded-lg
          bg-slate-700 text-white
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
        required
      />
    </div>
  )
}
