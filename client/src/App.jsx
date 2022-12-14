import {useState} from 'react'
import {BrandDribbble, BrandGithub, BrandLinkedin, BrandTwitter, BrandWhatsapp, Message2} from 'tabler-icons-react'

function App() {
    // current user details
    // todo
    const [user, setUser] = useState()

    return (
        <div className="min-w-fit min-h-screen bg-background">
            <div className="flex flex-col relative">
                {/*  nav bar */}
                <nav className="backdrop-filter backdrop-blur-lg z-10 sticky top-0 inset-x-0 bg-background bg-opacity-30">
                    <div className="grid grid-cols-12 mx-auto container max-w-7xl py-8">
                        {/*  brand  */}
                        <h6 className="font-semibold font-display text-on-background-light cursor-pointer col-span-3">qcodelabsllc.</h6>

                        {/*  actions  */}
                        <div className="col-span-6">
                            <ul className="flex flex-row justify-around items-center font-medium list-none text-on-background">
                                <li><a className="outline-none hover:text-primary transition-colors duration-300 uppercase text-sm" href="#home">Home</a></li>
                                <li><a className="outline-none hover:text-primary transition-colors duration-300 uppercase text-sm" href="#projects">Projects</a></li>
                                <li><a className="outline-none hover:text-primary transition-colors duration-300 uppercase text-sm" href="#skills">Skills</a></li>
                                <li><a className="outline-none hover:text-primary transition-colors duration-300 uppercase text-sm" href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        {/*  social media handles  */}
                        <div className="col-span-3 flex flex-row  w-full justify-end">
                            <ul className="flex flex-row space-x-4 items-center list-none">
                                <li><a className="outline-none text-on-background hover:text-primary transition-colors duration-150" href="#">
                                    <BrandWhatsapp size={24}/>
                                </a></li>
                                <li><a className="outline-none text-on-background hover:text-primary transition-colors duration-150" href="#">
                                    <BrandLinkedin size={24}/>
                                </a></li>
                                <li><a className="outline-non text-on-background hover:text-primary transition-colors duration-150" href="#">
                                    <BrandTwitter size={24}/>
                                </a></li>
                                <li><a className="outline-none text-on-background hover:text-primary transition-colors duration-150" href="#">
                                    <BrandDribbble size={24}/>
                                </a></li>
                                <li><a className="outline-none text-on-background hover:text-primary transition-colors duration-150" href="#">
                                    <BrandGithub size={24}/>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="mx-auto container min-h-full w-full mt-4 flex flex-col gap-y-8 pb-8">
                    {/*  hero */}
                    <section id="home" className="container w-full py-4">
                        <div className="flex flex-col items-center relative">
                            {/*avatar*/}
                            <div className="flex w-40 h-40 rounded-full overflow-clip bg-background">
                                <img src="https://avatars.githubusercontent.com/u/117631255?v=4" alt="avatar" className="object-cover object-center"/>
                            </div>

                            {/*username*/}
                            <h4 className="font-display font-semibold text-3xl mt-8 text-center text-on-background-light text-opacity-80">
                                Hi, I'm Quabynah Bilson Jr.
                            </h4>
                            <p className="text-on-background font-sans text-sm mt-2">Software Developer @ Teksol Limited, East Legon</p>

                            <h1 className="text-6xl text-center text-on-background-light font-display font-medium mt-8 mx-auto max-w-3xl">Passionate to create amazing digital products using modern
                                technologies</h1>
                            <p className="text-on-background text-sm mt-4 mx-auto max-w-2xl text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt molestias odio. Excepturi expedita maxime,
                                nihil placeat quo rem voluptate? Animi architecto at exercitationem inventore iste nulla odit recusandae voluptatem.</p>

                            <div
                                className="flex flex-row space-x-2 mt-8 mb-6 bg-primary text-on-primary py-3 px-6 rounded-full cursor-pointer border border-primary hover:bg-on-primary hover:text-primary transition duration-300"
                                onClick={() => console.log('button clicked')}>
                                <span>Let's work together</span>
                                <Message2/>
                            </div>
                        </div>
                    </section>

                    {/*  projects */}
                    <section id="projects" className="container h-96 bg-on-background bg-opacity-10 w-full py-4">
                        <div className="flex flex-col items-center gap-y-4 h-full">
                            <h1 className="font-display font-semibold text-5xl text-center">
                                {/*Projects*/}
                            </h1>
                            <div className="grid grid-cols-12 w-full max-w-6xl flex-1 bg-on-background bg-opacity-20"></div>
                        </div>
                    </section>

                    {/*  contact */}
                    <section id="contact" className="container h-96 bg-on-background bg-opacity-10 w-full py-4">
                        <div className="flex flex-col items-center gap-y-4 h-full">
                            <h1 className="font-display font-semibold text-5xl text-center">
                                {/*Projects*/}
                            </h1>
                            <div className="grid grid-cols-12 w-full max-w-6xl flex-1 bg-on-background bg-opacity-20"></div>
                        </div>
                    </section>
                </main>

                {/*  footer*/}
                <footer className="bg-background sticky w-full text-on-background-light shadow shadow-sm">
                    <div className="container mx-auto flex flex-row justify-between py-4">
                        {/* left */}
                        <div className="flex">Left side</div>

                        {/*    right */}
                        <div className="flex">Right side</div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App
