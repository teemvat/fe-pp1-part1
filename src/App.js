import './App.css';
import IdCard from './idCard/IdCard';
import Random from './random/Random';

function App() {
  return (
    <>
    {/* hello from app */}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={1.78}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={1.72}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </>
  );
}

export default App;
