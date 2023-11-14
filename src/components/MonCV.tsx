function MonCV() {
    const pdfUrl = "/public/CVPMD.pdf";


    return (
        <div className='px-50'>
            <h1>Titre de votre page</h1>
            <div className="custom-toolbar">
                <button
                    onClick={() => window.open(pdfUrl, '_blank')}
                    className="custom-download-button">
                    Télécharger le PDF
                </button>
            </div>
        </div>
    );
}

export default MonCV;
