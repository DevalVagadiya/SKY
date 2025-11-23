// import brainIcon from './assets/brain.png';
// import heartIcon from './assets/heart.png';
// import kidneyIcon from './assets/kidney.png';
// import earIcon from './assets/ear.png';
// import thyroidIcon from './assets/thyroid.png';
// import liverIcon from './assets/liver.png';
// import lungsIcon from './assets/lungs.png';
// import bonesIcon from './assets/bones.png';
// import allergyIcon from './assets/allergy.png';


// const items = [
//     { icon: brainIcon, label: 'Brain' },
//     { icon: heartIcon, label: 'Heart' },
//     { icon: kidneyIcon, label: 'Kidneys' },
//     { icon: earIcon, label: 'Ear' },
//     { icon: thyroidIcon, label: 'Thyroid' },
//     { icon: liverIcon, label: 'Liver' },
//     { icon: lungsIcon, label: 'Lungs' },
//     { icon: bonesIcon, label: 'Bones' },
//     { icon: allergyIcon, label: 'Allergy' },
// ];

const AboutBt = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row my-10 rounded-lg overflow-hidden max-w-7xl mx-auto">

                {/* Left Image Section */}
                <div className="md:w-1/2 p-4 flex items-center justify-center">
                    <img
                        src={'https://tse4.mm.bing.net/th/id/OIP.gabnTIrb9_VUBujEuAZp1QHaEK?r=0&cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3'}
                        alt="Vaccination"
                        className="rounded-lg shadow-md object-cover w-full h-full"
                    />
                </div>

                {/* Right Text Section */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                    <p className="text-blue-600 text-sm font-semibold uppercase">Bloodstream Evaluation</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        The bloodstream evaluate throughout Ahmedabad
                    </h2>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <div>
                                <strong>What is tested encompass:</strong> cells, chemicals, proteins and waste products,
                            </div>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <div>
                                <strong>Why It’s Done:</strong> Routine checks, Monitoring conditions (e.g., diabetes, cholesterol) and diagnosing diseases (e.g., infections, blood cancers). Checking treatments Monitoring organ function (liver, kidneys, heart, and thyroid).
                            </div>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <div>
                                <strong>Common Blood:</strong> Tests include the complete blood count (CBC), basic metabolic panel (BMP), blood smear, lipid profile, liver profile, kidney profile, thyroid profile, and other tests.
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto text-center space-y-8">

                {/* Title Section */}
                <div>
                    <p className="text-blue-600 text-sm uppercase">Lorem Ipsum</p>
                    <h1 className="text-2xl font-bold text-gray-800">Hutting By Stuctures</h1>
                </div>

                {/* Icons Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {/* {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-105 transform transition duration-200">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg">
                                <img src={item.icon} alt={item.label} className="w-10 h-10" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        </div>
                    ))} */}
                </div>

            </div>
        </>
    )
}

export default AboutBt