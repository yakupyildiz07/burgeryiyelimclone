import BannerImage from "../img/banneryeni.jpg";
import "../styles/About.css"
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}}>
      </div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore in doloremque voluptates dicta vero blanditiis, saepe dolorum numquam nemo dolorem, rem magnam reiciendis? Cum eveniet magni suscipit inventore dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga eum autem, inventore officiis quasi sequi unde eaque nihil odit asperiores nostrum esse aliquid, ab ad magnam? Quis, minus placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut reiciendis at alias aliquam laboriosam necessitatibus, molestiae natus adipisci iusto culpa, fugiat incidunt delectus corporis provident facilis pariatur fugit recusandae.</p>
      </div>
    </div>
  );
}
export default About;
