import { register } from 'riot'
import Sidebar from './components/global/sidebar/sidebar.riot'
import ReminderAudio from './components/global/reminder-audio/reminder-audio.riot'
import ReminderAudio2 from './components/global/reminder-audio-2/reminder-audio-2.riot'
import RetreatLinksHeader from './components/includes/retreat-links-header/retreat-links-header.riot'

// Rollup can not generate this object automatically via require.context :(
const componentsRegistry = {
  'retreat-links-header': RetreatLinksHeader,
  'reminder-audio': ReminderAudio,
  'reminder-audio-2': ReminderAudio2,
  sidebar: Sidebar
}

export default () => {
  Object.entries(componentsRegistry).map(([name, component]) => {
    register(name, component)

    return {
      name,
      component
    }
  })
}
