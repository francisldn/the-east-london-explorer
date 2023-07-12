import Link from "next/link";
import SmallHeader from "../../components/SmallHeader";

const Resources = () => {
    return (
        <div>
            <SmallHeader />
            <div className="mt-10 mx-8 lg:mx-32">
                <h1 className="text-start mb-8 text-5xl">Useful Resources</h1>
                <ul className="list-disc leading-10 text-lg mx-5">
                    <li><Link target="_blank" href="https://www.timeout.com/london" rel="noreferrer" className="text-underline">Timeout London</Link></li>
                    <li><Link target="_blank" href="https://www.visitlondon.com/" rel="noreferrer" className="text-underline">Visit London</Link></li>
                    <li><Link target="_blank" href="https://secretldn.com/" rel="noreferrer" className="text-underline">Secret London</Link></li>
                    <li><b>Walking tours:</b>
                        <ul className="ml-5 list-disc">
                            <li><Link target="_blank" href="https://www.cityoflondon.gov.uk/things-to-do/walks-and-itineraries/guided-walks-and-tours" rel="noreferrer" className="text-underline">City of London Guided Walks</Link></li>
                            <li><Link target="_blank" href="https://www.timeout.com/london/attractions/london-walking-tours" rel="noreferrer" className="text-underline">Timeout recommended walking tours</Link></li>
                        </ul>
                    </li>
                    <li><Link target="_blank" href="https://www.met.police.uk/ro/report/ocr/af/how-to-report-a-crime/" rel="noreferrer" className="text-underline"> London Met Police </Link></li>
                    <li><Link target="_blank" href="https://www.londontheatre.co.uk/" rel="noreferrer"  className="text-underline">London Theatre/Musicals booking</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Resources; 