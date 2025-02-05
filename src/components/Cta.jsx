import Button from "./Button"
import { styles } from "../constants/styles"

const Cta = () => {
  return (
    <div className={`${styles.heroPadY} ${styles.padX}`}>
        <div className="bg-indigo-50 px-7 py-10 lg:py-16 rounded-2xl lg:flex justify-between">
            <div>
              <h2 className="text-[1.75rem] font-semibold text-gray-800">Reclaim Your Keys, Reclaim Control</h2>
              <p className="text-gray-600 mt-3">Take charge of your finances once again. Click &quot;Get Started&quot; to receive assistance.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-7">
                <Button title="See Our Testimonials" color={'gray'} custStyles={'block text-center'} href="testimonials"  />
                <Button title="Get Started" color={'blue'} custStyles={'block text-center'} href="pricing"  />
            </div>
        </div>
        
    </div>
  )
}

export default Cta