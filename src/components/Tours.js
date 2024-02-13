import Card from './Card.js';

function Tours({ tours,removeTour}){
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Epic Journeys</h2>
      </div>
      <div className='cards'>
  {
    tours.map((tour) => <Card key={tour.id} {...tour} removeTour={removeTour} />)
    }
</div>

    </div>
    
  );
}
export default Tours;
