import './Hero.css';

function Hero(props) {
      return (
        <div className='hero-card'>
        <div className='hero-name'>{props.name}</div>
        <div className='hero-universe'><a className='rubric'>Вселенная:</a> {props.universe}</div>
        <div className='hero-mission'><a className='rubric'>Род деятельности:</a> {props.mission}</div>
        <div className='hero-alter'><a className='rubric'>Альтер эго:</a> {props.alter}</div>
        <div className='hero-friends'><a className='rubric'>Друзья:</a> {props.friends}</div>
        <div className='hero-superpowers'><a className='rubric'>Суперсилы:</a> {props.superpowers}</div>
        <img className='hero-image' src={props.url}></img>
        <div className='hero-text'><a className='rubric'>Подробности:</a> {props.text}</div>
</div>
    );
  }

  export default Hero;
