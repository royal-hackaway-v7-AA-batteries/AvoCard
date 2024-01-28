import ActivityRecord from "./ActivityRecord";
import SectionTitle from "./SectionTitle";

const ActivitySection = () => {
  return (
    <div className=" bg-white p-2 ">
      <SectionTitle text="Activity" />

      {[0, 1, 2, 3].map((number) => {
        return (
          <ActivityRecord
            key={number}
            name="Friend"
            description="Breakfast errand"
            timestamp="Today, 8:30 AM"
            balanceChange="+13"
          />
        );
      })}
      <div className=" flex w-full justify-center text-sm ">
        <p>View all...</p>
      </div>
    </div>
  );
};

export default ActivitySection;
