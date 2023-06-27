import {Tour} from "./Data"
import Title from "./Title"
const Tours=()=>{

    return(
        <section class="section" id="tours">
        <div class="section-title">
          
          <Title title="featured" subtitle="tours"/>
          
        </div>

        <div class="section-center featured-center">
          
          {Tour.map((tours)=>{
            
            const{id,image,title,text,icon,Location,date,days,cost}=tours
            return(
            <article class="tour-card" key={id}>
            <div class="tour-img-container">
              <img src={image} class="tour-img" alt={title} />
              <p class="tour-date">{date}</p>
            </div>
            <div class="tour-info">
              <div class="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div class="tour-footer">
                <p>
                  <span>
                    <i class={icon}></i>
                  </span>{" "}
                  {Location}
                </p>
                <p>{days}</p>
                <p>{cost}</p>
              </div>
            </div>
          </article>)


          })}
          
          
        </div>
      </section>

    )
}
export default Tours;