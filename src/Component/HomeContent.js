import Sentence from "./Sentence";


const HomeContent = () => {
    return (
        <div className='Home-Content'>

                <div className="Fish-1"></div>
                <div className="Fish-2"></div>
                <div className="Fish-3"></div>
                <div className="Fish-4"></div>
                <div className="Fish-5"></div>
                <div className="Fish-6"></div>
                <div className="Fish-7"></div>
                <div className="Fish-8"></div>


            <div className="Home-Content-Content">

                <div >
                    <div className="tree">★</div>
                    <Sentence
                        sentenceClassName={"s"}
                        sentenceContent={"Hi ;"}
                    />

                </div>
                <div >
                    <div className="tree">★</div>
                    <Sentence
                        sentenceClassName={"s"}
                        sentenceContent={"My name is Ömer Faruk ;"}
                    />
                </div>
                <div>
                    <div className="tree">★</div>
                    <Sentence
                        sentenceClassName={"s"}
                        sentenceContent={"I am a Front-End Web Developer ;"}
                    />
                </div>
                <div>
                    <div className="tree">★</div>
                    <Sentence
                        sentenceClassName={"s"}
                        sentenceContent={"Riding Bike, Travelling, and Playing Video Games are My hobbies ;"}
                    />
                </div>

                <div>
                    <div className="tree">★</div>
                    <Sentence
                        sentenceClassName={"s"}
                        sentenceContent={"Tools That Have experience with"}
                    />
                    <Sentence
                        sentenceClassName={"c"}
                        sentenceContent={"{"}
                    />
                </div>


                <div >
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Html,"}
                    />
                </div>
                <div >
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Css,"}
                    />
                </div>
                <div >
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"JavaScript,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"OOP,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"API,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"TypeScript,"}
                    />
                </div>
                <div >
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"React.js,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"XState,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Test/Jest"}
                    />
                </div>
                <div >
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Bootstrap,"}
                    />
                </div>
                <div >
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Tailwind,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Sass,"}
                    />
                </div>
                
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Git,"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Photoshop (For Taking Design),"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"İllustrator (For Organize Svg),"}
                    />
                </div>
                <div>
                    <Sentence
                        sentenceClassName={"tools"}
                        sentenceContent={"Vs Code"}
                    />
                </div>



                <div>
                    <Sentence
                        sentenceClassName={"c"}
                        sentenceContent={"}"}
                    />
                </div>
                <div >
                    <div className="tree">★</div>
                    <Sentence
                        sentenceClassName={"s"}
                        sentenceContent={"Still Learning ;"}
                    />

                </div>




            </div>



        </div>
    );
}

export default HomeContent;
