import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function ComingSoon() {
    return (<div>
        <div className='m-3 ml-10'>
            <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '24px' }} />
            </Link>

        </div>
        <div className="flex items-center justify-center pt-44 font-semibold text-4xl">
            <p>Coming Soon....</p>
        </div>
    </div>
    )
}