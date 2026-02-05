type CardProps = {
  title?: string
  children: React.ReactNode
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-xl w-full max-w-md">
      {title && (
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
