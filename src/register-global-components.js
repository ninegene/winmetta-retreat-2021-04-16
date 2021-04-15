import { register } from 'riot'
import MyComponent from './components/global/my-component/my-component.riot'
import Sidebar from './components/global/sidebar/sidebar.riot'
import ReminderAudio from './components/global/reminder-audio/reminder-audio.riot'

// Rollup can not generate this object automatically via require.context :(
const componentsRegistry = {
  'my-component': MyComponent,
  'sidebar': Sidebar,
  'reminder-audio': ReminderAudio,
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
