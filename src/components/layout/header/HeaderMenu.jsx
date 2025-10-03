const menuItem = [
    { id: 1, href: '#dishes', text: 'Menu' },
    { id: 2, href: '#recipes', text: 'Recipes' },
    { id: 3, href: '#chefs', text: 'Chefs' },
    { id: 4, href: '#', text: 'Contacts' },
];

export function HeaderMenu() {
    return (
        <ul className={`flex items-center flex-row gap-11`}>
            {menuItem.map(item => (
                <li id="li" key={item.id}>
                    <a href={item.href}>{item.text}</a>
                </li>
            ))}
        </ul>
    );
}
