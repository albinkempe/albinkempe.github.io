import Image from "next/image"
import ExperienceBox from "../components/ExperienceBox/ExperienceBox"
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'

const AboutPage = () => {
    return (
        <div className="about">
            <div className="gallery">
                <div className="galleryrow">
                    <div className="imgPlacerholder">
                        <Image src={"/albin-1.jpg"} width={600} height={600} alt="Picture of Albin Kempe"/>
                    </div>
                    <div className="imgPlacerholder">
                        <Image src={"/albin-2.jpg"} width={600} height={600} alt="Picture of Albin Kempe"/>
                    </div>
                </div>
                <div className="galleryrow">
                    <div className="imgPlacerholder">
                        <Image src={"/albin-3.jpg"} width={600} height={600} alt="Picture of Albin Kempe"/>
                    </div>
                    <div className="imgPlacerholder">
                        <Image src={"/albin-5.jpg"} width={600} height={600} alt="Picture of Albin Kempe"/>
                    </div>
                </div>
            </div>
            <div className="desc">
                <p className="hello">Hello!</p>
                <p className="aboutMeText">
                    I'm Albin. Word on the street is that I cook up the snazziest and most intuitive designs in the industry.
                    <br/><br/>
                    Want to find out if it's true? Hit me up!
                </p>
                <div className="spacer"></div>
                <h3>Experience</h3>
                <ExperienceBox
                title="Software Engineer"
                description="Thermo Fisher Scientific • Part-time"
                from="Aug 2022"
                to="Jun 2023"
                imgPath="/tfs-logo.png"
                />
                <div className="spacer"></div>
                <h3>Education</h3>
                <ExperienceBox
                title="KTH Royal Institute of Technology"
                description="Master's degree, Computer Science"
                from="2022"
                to="2024"
                imgPath="/kth-logo.jpeg"
                />
                <ExperienceBox
                title="KTH Royal Institute of Technology"
                description="Bachelor's degree, Computer Science"
                from="2019"
                to="2022"
                imgPath="/kth-logo.jpeg"
                />
                <div className="spacer"></div>
                <h3 id="socials">Socials</h3>
                <div className="contact">
                    <a href="https://github.com/albinkempe" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-900">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                        </svg>
                        albinkempe
                    </a>
                    <a href="https://www.linkedin.com/in/albinkempe/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-6 fill-slate-900" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                        albinkempe
                    </a>
                    <a href="mailto:albin.kempe@outlook.com">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        albin.kempe@outlook.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutPage