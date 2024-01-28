import ActionButton from "./ActionButton";
import ActivitySection from "./ActivitySection";
import BalanceSection from "./BalanceSection";

const AccountDetail = () => {
  return (
    <div className=" relative overflow-y-auto " id="account-info">
      <ActionButton content={["Send", "Recieve"]} />
      <div className=" flex flex-col gap-4 pb-20 ">
        <BalanceSection />
        <ActivitySection />
      </div>
      {/* <div id="send-receive">
    <div>Send</div>
    <div>|</div>
    <div>Recieve</div>
  </div> */}
    </div>
  );
};

export default AccountDetail;
