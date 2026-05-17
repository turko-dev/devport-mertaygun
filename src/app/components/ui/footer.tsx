import linkedin from './../../imgs/li_logo.png'
import github from './../../imgs/github.png'

import Image from 'next/image';

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="footer">
                    <div className="between-combine">
                        <p className="font font-small font-slim color-bg">Mert Aygun</p>
                        <p className="font font-small font-slim color-bg">Copyright 2026</p>
                    </div>
                    <div className="between-combine">

                        <p className="font font-small font-slim color-bg">info@mertaygun.co.uk</p>
                        <Image className="img-border-square-small" src={linkedin} height={25} alt="LinkedIn Logo" />
                        <Image className="img-border-square-small" src={github} height={25} alt="LinkedIn Logo" />

                        
                        
                    </div>
            </div>
        </div>
    )
}