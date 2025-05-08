
import './card3.css';

const MemberCard = ({ name, image, githubUrl }) => {
 
  return (
    
    <div id="card-area">
    <div class="wrapper">
        <div class="box-area">
            <div class="box">
                <img alt="" src={image}></img>
                <h3 class="name">{name}</h3> 
                <div class="overlay">
                    <h3>Rishik Goyal</h3>
                    <p>Junior Member</p>
                    <a
  href={githubUrl}
  target="_blank"
  
  className="github-link"
>
  <svg className="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.375 0 0 5.375 0 12c0 5.3 3.438 9.8 8.2 11.387.6.113.8-.263.8-.588v-2.087c-3.338.725-4.038-1.613-4.038-1.613-.55-1.388-1.338-1.763-1.338-1.763-1.088-.75.088-.738.088-.738 1.2.088 1.838 1.238 1.838 1.238 1.075 1.825 2.825 1.3 3.525.988.1-.788.425-1.3.75-1.6-2.662-.3-5.463-1.338-5.463-5.95 0-1.313.475-2.388 1.237-3.225-.125-.3-.537-1.5.113-3.125 0 0 1.012-.325 3.3 1.237a11.3 11.3 0 0 1 3-.4c1.025 0 2.05.138 3 .4 2.288-1.562 3.3-1.237 3.3-1.237.65 1.625.237 2.825.113 3.125.775.837 1.238 1.912 1.238 3.225 0 4.625-2.8 5.65-5.475 5.95.437.375.825 1.125.825 2.275v3.375c0 .325.2.7.813.587C20.563 21.8 24 17.3 24 12c0-6.625-5.375-12-12-12z" />
  </svg>
</a>
                </div>
            </div>
        </div>
    </div>
    </div>

  );
};

export default MemberCard;
