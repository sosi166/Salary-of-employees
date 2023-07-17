import { useAppSelector } from './types';
import Workers from './components/Workers/Workers';
import Navbar from './components/Navbar/Navbar';
import YearList from './components/YearList/YearList';
import WorkerList from './components/WorkerList/WorkerList';

function App() {

    const activePage = useAppSelector(state => state.navbar.activePage)

    return (
        <>
            <Navbar />
            {
               activePage === 'YearList' ? <YearList />
                    :
                    (
                        activePage === 'WorkerList' ? <WorkerList />
                            :
                            <Workers />
                    )
            }
        </>
    );
}
export default App;