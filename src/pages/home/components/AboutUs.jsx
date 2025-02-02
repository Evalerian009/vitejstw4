import Tabs from "../../../components/Tabs"
import Title from "../../../components/Title"
import { styles } from "../../../constants/styles"

const AboutUs = () => {
  return (
    <div className={`${styles.padX} ${styles.padY}`}>
        <Title smHeader={'About Us'} lgheader={'Why you\'ll love CAR'} />
        <Tabs />
    </div>
  )
}

export default AboutUs