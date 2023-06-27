import {Service} from "./Data.js"
import Title from "./Title"
const Services=()=>{
    return (
    <section className="section services" id="services">
        <div className="section-title">
          <Title  title="our" subtitle="services"/>
         
        </div>
        
        <div className="section-center services-center">
          
              {Service.map((services)=>{
            
            const{id,title,icon,text}=services
            return(  
            <article className="service" key={id}>
              <span className="service-icon">
                
            <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">
                {text}
              </p>
            </div>
            </article>
)
           
              })}
             
         

        </div>  
      </section>

      
    )
}
export default Services;