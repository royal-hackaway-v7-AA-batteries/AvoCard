import "./ActivityRecord.scss";

function ActivityRecord({
  name,
  description,
  timestamp,
  balanceChange,
}: {
  name: string;
  description: string;
  timestamp: string;
  balanceChange: string;
}) {
  return (
    <div className="activity-record">
      <div id="profile-picture"></div>
      <div id="information" className="flex flex-row">
        <div id="textual-info" className="flex flex-col">
          <div id="name">
            From <i className="text-blue-400 underline">{name}</i>
          </div>
          <div className="flex flex-row justify-between">
            <div id="description">{description}</div>
            <div id="timestamp">{timestamp}</div>
          </div>
        </div>
        <div id="balance-change">{balanceChange}</div>
      </div>
    </div>
  );
}

export default ActivityRecord;
