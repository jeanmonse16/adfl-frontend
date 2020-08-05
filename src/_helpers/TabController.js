export default (tabs) => {
  let activeTab = 0

  return {
    tabs: () => tabs,
    activeTab: () => tabs[activeTab],
    isActiveTab: i => i === activeTab,
    setActiveTab: i => { activeTab = i }
  }
}
