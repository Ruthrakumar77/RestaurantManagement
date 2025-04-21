import BigCalendar from "../components/BigCalendar"
import DashboardLineChart from "../components/DashboardLineChart"
import EventsList from "../components/EventsList"

function Dashboard() {
    return (
        <>
            <div className="parent flex flex-col">
                {/* events section */}
                <div className="flex h-[500px] gap-2">
                    {/* calendar */}
                    <div className="w-2/3 content-center text-center">
                        <BigCalendar />
                    </div>
                    {/* events list */}
                    <div className=" w-1/3 p-2">
                        <EventsList />
                    </div>
                </div>
                {/* chart */}
                <div className="chart h-[400px]">
                    <DashboardLineChart />
                </div>
            </div>
        </>
    )
}
export default Dashboard