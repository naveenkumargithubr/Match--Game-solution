import './index.css'

const tabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const tabChange = tabId === isActive ? 'active-tab' : ''

  const onTabChangeTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-container">
      <button
        type="button"
        className={`btn ${tabChange}`}
        onClick={onTabChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default tabItem
