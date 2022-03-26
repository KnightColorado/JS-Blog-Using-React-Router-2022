import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useStoreActions } from "easy-peasy";
import useWindoowSize from './hooks/useWindowSize';
const Layout = () => {
    const {width} = useWindoowSize();
    const search = useStoreActions((actions) => actions.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);
  return (
    <div className="App">
        <Header title = "React JS Blog" width={width}/>
        <Nav search={search} setSearch={setSearch}/>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout