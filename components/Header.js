import Button from "./Button"


const Header = ({title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1 style={{ color: 'blue'}}>{title}</h1>
            <Button color={showAdd ? 'red': 'green'}
             text={showAdd ? 'close' :'Add'}
            onClick={onAdd}/>
        </header>
    )
}


Button.defaultProps = {
  color: 'black',
  text:'btn'
}

Header.defaultProps = {
  title: 'Tester Allocation',
}

export default Header
