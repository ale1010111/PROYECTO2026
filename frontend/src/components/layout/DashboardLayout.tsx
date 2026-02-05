import { Navbar } from './Navbar';

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 md:p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};
