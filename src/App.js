import './App.css';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import bgImg from './assets/bg-img.jpeg';
import pockemonCards from './data/pockemons.json';
import PockemonCard from './components/PockemonCard/PockemonCard';


function App() {
  return (
    <div className="App">
      <Header title={'Title'} descr={'Descr'}  />

      <Layout 
        id='rules'
        urlBg={bgImg}
        title='Rules'> 
          <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
          <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        </Layout>
        
      <Layout 
        id='cards'
        colorBg='#e2e2e2'
        title='Cards'
        descr='descr - 2'> 
       <div className="flex">
          {
            pockemonCards.map(item => <PockemonCard {...item} key={item.id}/>)
          }
       </div>
      </Layout>

      <Layout 
        id='about'
        urlBg={bgImg}
        title='Full Rules'>
          <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
        </Layout>

      <Footer/>
    </div>
  );
}

export default App;
