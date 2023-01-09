const Navarray = [
    'Home',
    'Produkter',
    'Om os',
    'Ledige stillinger',
    'Kontakt os'
];

const Nav = () => {
    return(
        <ul>
            {Navarray.map((value, key) => {
                return(
                    <li key={key}>{value}</li>
                )
            })}
        </ul>
    )
}
export default Nav