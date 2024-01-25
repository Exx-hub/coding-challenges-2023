// eslint-disable-next-line react/prop-types
function Tab({ activeTab }) {
  const content = activeTab === 1 ? "HOME" : activeTab === 2 ? "ABOUT" : "CONTACT";
  return (
    <div>
      <h3>Tab {activeTab}</h3>
      <p>This is the {content} page</p>
    </div>
  );
}

export default Tab;
