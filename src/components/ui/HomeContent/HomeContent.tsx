import Welcome from './Welcome/Welcome'
import Line from '@/components/Line/Line'
import Advantages from './Advantages/Advantages'

export default function HomeContent() {
  return (
    <div className='container'>
      <Welcome />
      <Line />
      <Advantages />
    </div>
  )
}
