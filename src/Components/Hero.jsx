
import { Parallax } from 'react-parallax';
const Hero = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            className='max-w-[1170px] mx-auto h-[400px] '
        >

            <div>
                <div className="hero h-[400px] mx-auto max-w-[1170px]" >
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Hero;