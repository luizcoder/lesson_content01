import ListItem from './ListItem'

const ListDemo = () => {
    const list = ['Orange', 'Apple', 'Pear']
    return (
        <ul>
            {
                list.map((item, id) => (
                    <ListItem key={id} title={item} />
                ))
            }
        </ul>
    )
}

export default ListDemo