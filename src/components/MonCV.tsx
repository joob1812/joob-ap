import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function MonCV() {
    const pdfUrl = "/public/CVPMD.pdf";


    return (
        <div className='px-50'>
            <h1>Titre de votre page</h1>
            <div className="custom-toolbar">
                <button
                    onClick={() => window.open(pdfUrl, '_blank')}
                    className="custom-download-button"
                >
                    Télécharger le PDF
                </button>
            </div>
            <div className='mt-6 p-2 px-4 bg-none'>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    
                    <div className="md:hidden block h-[390px] mt-16">
                        <Viewer fileUrl={pdfUrl} defaultScale={0.5} />
                    </div>
                    <div className="hidden md:block h-[550px] mt-16 object-cover">
                        <Viewer fileUrl={pdfUrl} defaultScale={0.9} />
                    </div>
                </Worker>
            </div>

        </div>
    );
}

export default MonCV;
