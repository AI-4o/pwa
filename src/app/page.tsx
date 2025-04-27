
import PushNotificationManager from '../../pwa-components/push-notification-manager'
import InstallPrompt from '../../pwa-components/install-prompt'


export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}
