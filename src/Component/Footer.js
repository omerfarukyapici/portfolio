import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div>
                <div className='Footer-Content'>
                    <div className='center'>
                        <div>
                            <a className="Linkedin" target="_blank" href="https://www.linkedin.com/in/%C3%B6mer-faruk-yap%C4%B1c%C4%B1-57b5b11b6/"></a>
                        </div>
                        <div>
                            <a className="Github" target="_blank" href="https://github.com/omerfarukyapici"></a>
                        </div>
                        <div>
                            <a className="Twitter" target="_blank" href="https://twitter.com/DeveloperOmer"></a>
                        </div>
                    </div>
                </div>
                <div className='withLove'>Made with ❤️ by Ömer Faruk</div>
            </div>
        </div>
    );
}

export default Footer;