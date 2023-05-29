import Image from "next/image";
import classes from "@/styles/home-page/hero.module.css";

const Hero = () =>{

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={"/images/site/profile-image.jpeg"} alt={"An Developers Phtot"} height={300} width={300}/>
            </div>
            <h1>Hi!! I am Prajwal</h1>
            <p>
                I blog about web development - especially frontend frameworks like Angular or React
            </p>

        </section>
    )
}
export default Hero;
