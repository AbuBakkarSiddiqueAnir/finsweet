

import {FC, ReactElement} from 'react';

type LayoutProps = {
    children: ReactElement
};

const Layout:React.FC<LayoutProps> = ({ children }) => {

    return (
        <div>


        <main className='fit'>

            {children}
        </main>
        </div>
    )
}
export default Layout;

