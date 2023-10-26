import React from 'react';

function Menu({ onSelectOption }) {
    return (


        <div className='menu'>
            <div className='green'> <p className='text'>GreenOptimize</p></div>
            <div className='option_1' onClick={() => onSelectOption('Ma_consommation')}>
                <div className='icon_1'><img alt="rien" src="../../1-removebg-preview.png" /></div>
                <div className='nom_1'>
                    <p className='text'>Ma consommation</p>
                </div>

            </div>
            <div className='option_2'>
                <div className='icon_2'><img alt="rien" src="../../icon_2.png" /></div>
                <div className='nom_2'>
                    <p className='text'>Analyser et suggérer</p>
                </div>

            </div>
            <div className='option_3'>
                <div className='icon_3'><img alt="rien" src="../../icon_3.png" /></div>
                <div className='nom_3'>
                    <p className='text'>Partager ma route</p>
                </div>

            </div>
            <div className='option_4'>
                <div className='icon_4'><img alt="rien" src="../../icon_4.png" /></div>
                <div className='nom_4'>
                    <p className='text'>Les énergivores</p>
                </div>

            </div>
            <div className='option_5'>
                <div className='icon_5'><img alt="rien" src="../../icon5.png" /></div>
                <div className='nom_5'>
                    <p className='text'>Green News</p>
                </div>

            </div>
        </div>
    )

}

export default Menu;
