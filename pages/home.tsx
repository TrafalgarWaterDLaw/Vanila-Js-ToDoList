import Todos from '../components/Todos'
import Dashboard from '../components/Ui/Dashboard'

const Home: React.FC = () => {
    return (
        <Dashboard>
            <Todos/>
        </Dashboard>
    )
}

export default Home