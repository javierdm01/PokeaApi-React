import { Outlet,Link } from "react-router-dom";
export function Layout(){

    return (
        <>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>Pokemons</Link></li>
                            <li><Link to={'/berries'}>Berries</Link></li>
                            <li><Link to={'/locations'}>Locations</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}