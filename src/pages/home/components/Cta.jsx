import Button from "../../../components/Button"
import { styles } from "../../../constants/styles"

const Cta = () => {
  return (
    <div className={`${styles.heroPadY} ${styles.padX}`}>
        <div className="bg-blue-50 px-7 py-10 lg:py-16 rounded-2xl lg:flex justify-between">
            <div>
                <h2 className="text-[1.75rem] font-semibold text-gray-800">Your keys, back in your pocket</h2>
                <p className="text-gray-600 mt-3">Put your finances under your control again. Click &quot;Get started&quot; to get help.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-7">
                <Button title="See Our Testimonials" color={'gray'} custStyles={'block text-center'}  />
                <Button title="Get Started" color={'blue'} custStyles={'block text-center'}  />
            </div>
        </div>
        
    </div>
  )
}

export default Cta