import React from 'react';
import Aside from '../../common/aside';

class HTML extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>html</h1>
                </main>
            </div>
        )
    }
}
export default HTML;