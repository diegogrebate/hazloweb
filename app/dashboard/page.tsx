import { NumberCoaches } from "@/components/charts/NumberCoaches";
import { ServicesChart } from "@/components/charts/ServicesChart";
import { TotalUsers } from "@/components/charts/TotalUsers";
import { UserGenderChart } from "@/components/charts/UserGenderChart";
import { UsersPerMonth } from "@/components/charts/UsersPerMonth";
import { VerifiedUsers } from "@/components/charts/VerifiedUsers";
import { WaitlistTable } from "@/components/charts/WaitlistTable";
import { WaitlistUsers } from "@/components/charts/WaitlistUsers";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 px-4">
      {/*First Row */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl text-white font-bold">Statistics</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1 h-[250px]">
            <TotalUsers />
          </div>
          <div className="col-span-1 h-[250px]">
            <VerifiedUsers />
          </div>
          <div className="col-span-1 h-[250px]">
            <NumberCoaches />
          </div>
          <div className="col-span-1 h-[250px]">
            <ServicesChart />
          </div>
        </div>
      </div>
      {/*Second Row */}
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-[450px]">
          <UserGenderChart />
        </div>
        <div className="col-span-3 h-[450px]">
          <UsersPerMonth />
        </div>
      </div>
      {/*Third Row */}
      <div className="flex flex-col gap-6 mt-4">
        <h2 className="text-3xl text-white font-bold">Waitlist</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1 h-[400px]">
            <WaitlistUsers />
          </div>
          <div className="col-span-3 h-[400px]">
            <WaitlistTable />
          </div>
        </div>
      </div>
    </div>
  );
}
