const ListItem = ({title, id, children}) => {
    return (
    <>
        <li key={id}>{title}</li>
        {children}
     </>
    )
}

export default ListItem