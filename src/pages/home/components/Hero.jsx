import Button from "../../../components/Button"
import { styles } from "../../../constants/styles"

const Hero = () => {
  return (
    <div className={`${styles.padX} ${styles.heroPadY} flex flex-col md:flex-row relative`}>
        <div className="md:w-3/5 relative z-[]8">
            <h1 className="text-[2.5rem] min-[400px]:text-[3rem] md:text-[3.25rem] lg:text-[3.5rem] xl:text-[4.5rem] relative z-[6]">Effortless, Transparent Wallet Restoration</h1>
            <p className="mt-5 max-w-[480px] leading-relaxed relative z-[6]">
            Regain control of your crypto assets with our secure, hassle-free recovery process. We guide you every step of the way, ensuring transparency and privacy. Trust our experts to restore your wallet quickly and safely.
            <br />
            <br />
            Start your recovery today.</p>

            <div className="mt-10 flex flex-wrap gap-3">
                <Button color='gray' title='Testimonials' custStyles={''} href="testimonials" />
                <Button color='blue' title='Contact Us' href="contact" />
            </div>
        </div>

        <div className="max-[720px]:max-w-[250px] mx-auto min-[720px]:w-3/5 right-0 lg:right-[10%] relative md:absolute lg:max-w-[475px] md:top-0 h-full mt-24 md:mt-0">
            <img 
                className="object-contain w-full h-full"
                src="./hero.svg"
            />
        </div>
    </div>
  )
}

export default Hero