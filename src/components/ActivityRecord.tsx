import "./ActivityRecord.scss";

function ActivityRecord() {
  return (
    <div className="activity-record">
      <div id="profile-picture"></div>
      <div id="information" className="flex flex-row">
        <div id="textual-info" className="flex flex-col">
          <div id="name">
            From <i className="text-blue-400 underline">Friend</i>
          </div>
          <div className="flex flex-row justify-between">
            <div id="description">Breakfast errand</div>
            <div id="timestamp">Today, 8:30 AM</div>
          </div>
        </div>
        <div id="balance-change">+13</div>
      </div>
    </div>
  );
}

export default ActivityRecord;
