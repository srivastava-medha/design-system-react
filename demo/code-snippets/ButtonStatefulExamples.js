<div className="slds-x-small-buttons--horizontal">
  <SLDSButtonStateful />

  <SLDSButtonStateful
    assistiveText="like"
    iconName="like"
    iconSize="large"
    variant="icon" />

  <div style={{backgroundColor: "#16325c", padding: "10px", display: "inline-block"}} className="slds-m-horizontal--small">
    <SLDSButtonStateful
      stateOne={{iconName: "add", label: "Join"}}
      stateTwo={{iconName: "check", label: "Member"}}
      stateThree={{iconName: "close", label: "Leave"}}
      variant="inverse" />
  </div>
</div>

