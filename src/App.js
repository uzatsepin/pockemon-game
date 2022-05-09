import './App.css';
import Footer from './components/Foooter/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import bgImg from './assets/bg-img.jpeg';


function App() {
  return (
    <div className="App">
      <Header title={'Title'} descr={'Descr'}  />

      <Layout 
        urlBg={bgImg}
        title='title-1'
        descr='descr - 1'/>
      <Layout 
        colorBg='#e2e2e2'
        title='title-3'
        descr='descr - 2'/>
      <Layout 
        urlBg={bgImg}
        title='title-2'
        descr='descr - 3'/>

      <Footer/>
    </div>
  );
}

export default App;
