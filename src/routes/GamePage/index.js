const GamePage = ({onChangePage}) => {

  const handleClickButton = () => {
    console.log('####: <HomePage/>');
    onChangePage && onChangePage('app');
  }

  return (
    <div>
      <button onClick={handleClickButton}>
          Start Game
        </button>
    </div>
  )
}

export default GamePage;