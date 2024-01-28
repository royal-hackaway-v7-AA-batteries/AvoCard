import ActionButton from "./ActionButton";
import ActivitySection from "./ActivitySection";
import BalanceSection from "./BalanceSection";

const AccountDetail = () => {
  return (
    <div className=" relative h-full overflow-hidden " id="account-info">
      <ActionButton content={["Send", "Recieve"]} />
      <div className=" flex h-full flex-col gap-4 overflow-y-auto pb-20 ">
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
