import '../styles/Main.css'

export default function About() {
    return (
        <div>
    <main><h1>About <div className="sphp"></div></h1></main>
    <div className='containerX'>
    <div className="box">
    <h3> Epicuro </h3>
    <p>Así como el sabio no escoge los alimentos más abundantes, si no los más sabrosos, tampoco ambiciona la vida más prolongada, si no la más intensa. </p>
    </div>
    </div>
    <ul align="center">
        <li><a href='https://github.com/MilkyRaven'><img className='icon' src="/img/25231.png" alt=''/><h2>Milky</h2></a></li>
        <li><a href='https://github.com/Serphp'><img className='icon' src="/img/25231.png" alt=''/><h2>Serph</h2></a></li>
    </ul>

    </div>
)
}