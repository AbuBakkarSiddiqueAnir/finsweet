import { FC, ReactElement } from 'react';
import { Navbar } from '@components/index';
import { Footer } from '@components/index';

type LayoutProps = {
    children: ReactElement
};

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Navbar brand="/logo/Logo.png" />
            <main className='container mx-auto '>
                {children}
            </main>
            <Footer brand="/logo/brand-white.png" />
        </>
    )
}
export default Layout;

